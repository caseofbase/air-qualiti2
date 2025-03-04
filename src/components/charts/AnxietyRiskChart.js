import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { supabase } from '../../supabaseClient';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

// Utility functions
const calculateHVACReduction = (value) => value * 0.7;
const calculateEcologicaReduction = (value) => value * 0.6;
const calculateCombinedReduction = (value) => value * 0.5;

const calculateAnxietyRisk = (baseLevel, pm10) => {
  if (!pm10) return baseLevel; // Handle null/undefined PM10
  if (pm10 >= 10) {
    const increase = pm10 / 10;
    const riskIncrease = increase * 0.12; // 12% increase per 10μg/m³
    return Math.min(10, baseLevel * (1 + riskIncrease));
  }
  return baseLevel;
};

const DatasetToggle = ({ name, isActive, onToggle, color }) => (
  <div style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
    <button
      onClick={() => onToggle(name)}
      style={{
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: `2px solid ${color}`,
        backgroundColor: isActive ? color : 'white',
        cursor: 'pointer',
        marginRight: '8px',
        padding: 0
      }}
    />
    <span style={{ fontSize: '0.9rem' }}>{name}</span>
  </div>
);

const AnxietyRiskChart = ({ userPreferences }) => {
  const [chartData, setChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeDatasets, setActiveDatasets] = useState({
    'Baseline Anxiety Risk': true,
    'Anxiety Risk with Your Preferences': true
  });
  const [weatherData, setWeatherData] = useState([]);

  const toggleDataset = (name) => {
    setActiveDatasets(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!userPreferences?.city) {
        setError('No city selected');
        setIsLoading(false);
        return;
      }

      try {
        const { data, error: supabaseError } = await supabase
          .from('weather_data')
          .select('*')
          .eq('city', userPreferences.city)
          .order('created_at', { ascending: false })
          .limit(60);

        if (supabaseError) throw supabaseError;

        if (!data || data.length === 0) {
          setError('No data available');
          setIsLoading(false);
          return;
        }

        setWeatherData(data);

        const formattedData = {
          labels: data.map(item => new Date(item.created_at)),
          datasets: [
            {
              label: 'Baseline Anxiety Risk',
              data: data.map(item => ({
                x: new Date(item.created_at),
                y: calculateAnxietyRisk(userPreferences.anxietyLevel || 5, item.pm10)
              })),
              borderColor: 'rgb(0, 100, 0)',
              backgroundColor: 'rgba(0, 100, 0, 0.1)',
              borderWidth: 2,
              tension: 0.1
            }
          ]
        };

        if (userPreferences.hasHVAC || userPreferences.hasEcologica) {
          const adjustedData = data.map(item => {
            let adjustedPM10 = item.pm10;
            if (userPreferences.hasHVAC && userPreferences.hasEcologica) {
              adjustedPM10 *= 0.5;
            } else if (userPreferences.hasHVAC) {
              adjustedPM10 *= 0.7;
            } else if (userPreferences.hasEcologica) {
              adjustedPM10 *= 0.6;
            }
            return {
              x: new Date(item.created_at),
              y: calculateAnxietyRisk(userPreferences.anxietyLevel || 5, adjustedPM10)
            };
          });

          formattedData.datasets.push({
            label: 'Anxiety Risk with Your Preferences',
            data: adjustedData,
            borderColor: 'rgb(144, 238, 144)',
            backgroundColor: 'rgba(144, 238, 144, 0.1)',
            borderWidth: 2,
            tension: 0.1
          });
        }

        setChartData(formattedData);
        setError(null);
      } catch (err) {
        console.error('Error fetching anxiety risk data:', err);
        setError('Failed to load data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userPreferences]);

  if (isLoading) return <div>Loading anxiety risk data...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!chartData || !weatherData.length) return <div>No anxiety risk data available</div>;

  const { hasHVAC, hasEcologica, anxietyLevel = 5 } = userPreferences;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
          displayFormats: {
            day: 'MMM d'
          }
        },
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        beginAtZero: true,
        max: 10,
        title: {
          display: true,
          text: 'Anxiety Risk Level'
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'bottom'
      },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    }
  };

  return (
    <div className="content-wrapper">
      <div className="chart-side">
        <div style={{ height: '400px', width: '100%' }}>
          <Line data={chartData} options={options} />
        </div>
        <div style={{ 
          marginTop: '20px',
          display: 'flex',
          gap: '20px',
          justifyContent: 'center'
        }}>
          <DatasetToggle 
            name="Baseline Anxiety Risk" 
            isActive={activeDatasets['Baseline Anxiety Risk']} 
            onToggle={toggleDataset}
            color="rgb(0, 100, 0)"
          />
          {(hasHVAC || hasEcologica) && (
            <DatasetToggle 
              name="Anxiety Risk with Your Preferences" 
              isActive={activeDatasets['Anxiety Risk with Your Preferences']} 
              onToggle={toggleDataset}
              color="rgb(144, 238, 144)"
            />
          )}
        </div>
      </div>
      
      <div className="data-side">
        <div className="key-data-title">
          KEY DATA POINTS
        </div>
        <div className="key-data-points">
          <div className="key-data-point">
            <span className="key-data-number">
              {anxietyLevel.toFixed(1)}
            </span>
            <span className="key-data-label">
              Base<br />Level
            </span>
          </div>
          <div className="key-data-point">
            <span className="key-data-number">
              {weatherData.filter(day => 
                calculateAnxietyRisk(anxietyLevel, parseFloat(day['PM 10'])) > anxietyLevel
              ).length}
            </span>
            <span className="key-data-label">
              Days with<br />Increased Risk
            </span>
          </div>
          <div className="key-data-point">
            <span className="key-data-number">
              {Math.max(...weatherData.map(day => 
                calculateAnxietyRisk(anxietyLevel, parseFloat(day['PM 10']))
              )).toFixed(1)}
            </span>
            <span className="key-data-label">
              Peak<br />Level
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnxietyRiskChart; 