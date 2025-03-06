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

const calculateIndoorReduction = (value) => {
  return value * 0.7; // 30% reduction for indoor air quality
};

const calculateEcologicaReduction = (value) => {
  return value * 0.6; // 40% reduction
};

const calculateCombinedReduction = (value) => {
  return value * 0.5; // 50% reduction
};

const calculateImpact = (value, hasEcologica) => {
  const indoorValue = calculateIndoorReduction(value);
  if (hasEcologica) {
    return calculateCombinedReduction(value);
  }
  return indoorValue;
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

const PM25Chart = ({ userPreferences }) => {
  const [chartData, setChartData] = useState(null);
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeDatasets, setActiveDatasets] = useState({
    'Outdoor': true,
    'Indoor': true
  });
  const [showEcologica, setShowEcologica] = useState(userPreferences.hasEcologica);

  const toggleDataset = (name) => {
    setActiveDatasets(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const calculateDaysOverThreshold = (data, threshold) => {
    return data.filter(day => parseFloat(day.y) > threshold).length;
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
              label: 'Outdoor',
              data: data.map(item => ({
                x: new Date(item.created_at),
                y: item.pm25
              })),
              borderColor: 'rgb(0, 100, 0)',
              backgroundColor: 'rgba(0, 100, 0, 0.1)',
              borderWidth: 2,
              tension: 0.1
            },
            {
              label: 'Indoor',
              data: data.map(item => ({
                x: new Date(item.created_at),
                y: calculateIndoorReduction(item.pm25)
              })),
              borderColor: 'rgb(144, 238, 144)',
              backgroundColor: 'rgba(144, 238, 144, 0.1)',
              borderWidth: 2,
              tension: 0.1
            }
          ]
        };

        if (showEcologica) {
          formattedData.datasets.push({
            label: 'With Ecologica',
            data: data.map(item => ({
              x: new Date(item.created_at),
              y: calculateCombinedReduction(item.pm25)
            })),
            borderColor: 'rgb(100, 149, 237)',
            backgroundColor: 'rgba(100, 149, 237, 0.1)',
            borderWidth: 2,
            tension: 0.1
          });
        }

        setChartData(formattedData);
      } catch (err) {
        console.error('Error fetching PM2.5 data:', err);
        setError('Failed to load PM2.5 data');
      } finally {
        setIsLoading(false);
      }
    };

    if (userPreferences.city) {
      fetchData();
    }
  }, [userPreferences, showEcologica]);

  if (isLoading) return <div>Loading PM2.5 data...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!chartData || !weatherData.length) return <div>No PM2.5 data available</div>;

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
            name="Outdoor" 
            isActive={activeDatasets['Outdoor']} 
            onToggle={toggleDataset}
            color="rgb(0, 100, 0)"
          />
          <DatasetToggle 
            name="Indoor" 
            isActive={activeDatasets['Indoor']} 
            onToggle={toggleDataset}
            color="rgb(144, 238, 144)"
          />
          <DatasetToggle 
            name="With Ecologica" 
            isActive={showEcologica} 
            onToggle={() => setShowEcologica(!showEcologica)}
            color="rgb(100, 149, 237)"
          />
        </div>
      </div>
      
      <div className="data-side">
        <div className="key-data-title">
          KEY DATA POINTS
        </div>
        <div className="key-data-points">
          <div className="key-data-point">
            <span className="key-data-number">
              {calculateDaysOverThreshold(chartData.datasets[0].data, 12)}
            </span>
            <span className="key-data-label">
              days over<br />
              12μg/m³
            </span>
          </div>
          <div className="key-data-point">
            <span className="key-data-number">
              {calculateDaysOverThreshold(chartData.datasets[0].data, 35)}
            </span>
            <span className="key-data-label">
              days over<br />
              35μg/m³
            </span>
          </div>
          <div className="key-data-point">
            <span className="key-data-number">
              {calculateDaysOverThreshold(chartData.datasets[0].data, 55)}
            </span>
            <span className="key-data-label">
              days over<br />
              55μg/m³
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  legend: {
    marginTop: '20px',
    padding: '15px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  legendTitle: {
    marginBottom: '10px',
    color: '#2d4739',
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  legendItem: {
    margin: '5px 0',
    color: '#4a7c44',
    fontSize: '0.9rem'
  }
};

export default PM25Chart; 