import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
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
import 'chartjs-adapter-date-fns';
import { supabase } from '../../supabaseClient';

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

const PM10Chart = ({ userPreferences }) => {
  const [chartData, setChartData] = useState(null);
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeDatasets, setActiveDatasets] = useState({
    'Original PM10': true,
    'PM10 with Your Preferences': true
  });

  const toggleDataset = (name) => {
    setActiveDatasets(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const calculateDaysOverThreshold = (data, threshold) => {
    return data.filter(day => parseFloat(day['PM 10']) > threshold).length;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error: dataError } = await supabase
          .from('weather_data')
          .select('*')
          .eq('city', userPreferences.city)
          .order('created_at', { ascending: false })
          .limit(60);

        if (dataError) throw dataError;

        setWeatherData(data);

        const formattedData = {
          labels: data.map(item => new Date(item.created_at)),
          datasets: [
            {
              label: 'PM10 Levels',
              data: data.map(item => ({
                x: new Date(item.created_at),
                y: item.pm10
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
            let adjustedValue = item.pm10;
            if (userPreferences.hasHVAC && userPreferences.hasEcologica) {
              adjustedValue *= 0.5;
            } else if (userPreferences.hasHVAC) {
              adjustedValue *= 0.7;
            } else if (userPreferences.hasEcologica) {
              adjustedValue *= 0.6;
            }
            return {
              x: new Date(item.created_at),
              y: adjustedValue
            };
          });

          formattedData.datasets.push({
            label: 'PM10 with Your Preferences',
            data: adjustedData,
            borderColor: 'rgb(144, 238, 144)',
            backgroundColor: 'rgba(144, 238, 144, 0.1)',
            borderWidth: 2,
            tension: 0.1
          });
        }

        setChartData(formattedData);
      } catch (err) {
        console.error('Error fetching PM10 data:', err);
        setError('Failed to load PM10 data');
      } finally {
        setIsLoading(false);
      }
    };

    if (userPreferences.city) {
      fetchData();
    }
  }, [userPreferences]);

  if (isLoading) return <div>Loading PM10 data...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!chartData || !weatherData.length) return <div>No PM10 data available</div>;

  const { hasHVAC, hasEcologica } = userPreferences;

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
        title: {
          display: true,
          text: 'μg/m³'
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
            name="Original PM10" 
            isActive={activeDatasets['Original PM10']} 
            onToggle={toggleDataset}
            color="rgb(0, 100, 0)"
          />
          {(hasHVAC || hasEcologica) && (
            <DatasetToggle 
              name="PM10 with Your Preferences" 
              isActive={activeDatasets['PM10 with Your Preferences']} 
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
              {calculateDaysOverThreshold(chartData.datasets[0].data, 20)}
            </span>
            <span className="key-data-label">
              days over<br />
              20μg/m³
            </span>
          </div>
          <div className="key-data-point">
            <span className="key-data-number">
              {calculateDaysOverThreshold(chartData.datasets[0].data, 40)}
            </span>
            <span className="key-data-label">
              days over<br />
              40μg/m³
            </span>
          </div>
          <div className="key-data-point">
            <span className="key-data-number">
              {calculateDaysOverThreshold(chartData.datasets[0].data, 50)}
            </span>
            <span className="key-data-label">
              days over<br />
              50μg/m³
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PM10Chart; 