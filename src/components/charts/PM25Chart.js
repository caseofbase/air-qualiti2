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

const calculateHVACReduction = (value) => {
  return value * 0.7; // 30% reduction
};

const calculateEcologicaReduction = (value) => {
  return value * 0.6; // 40% reduction
};

const calculateCombinedReduction = (value) => {
  return value * 0.5; // 50% reduction
};

const calculateImpact = (value, hasHVAC, hasEcologica) => {
  if (hasHVAC && hasEcologica) {
    return calculateCombinedReduction(value);
  } else if (hasHVAC) {
    return calculateHVACReduction(value);
  } else if (hasEcologica) {
    return calculateEcologicaReduction(value);
  }
  return value;
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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeDatasets, setActiveDatasets] = useState({
    'Original PM2.5': true,
    'PM2.5 with Your Preferences': true
  });

  const toggleDataset = (name) => {
    setActiveDatasets(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from('weather_data')
          .select('*')
          .eq('city', userPreferences.city)
          .order('created_at', { ascending: false })
          .limit(60);

        if (error) throw error;

        const formattedData = {
          labels: data.map(item => new Date(item.created_at)),
          datasets: [
            {
              label: 'PM2.5 Levels',
              data: data.map(item => ({
                x: new Date(item.created_at),
                y: item.pm25
              })),
              borderColor: 'rgb(0, 100, 0)',
              backgroundColor: 'rgba(0, 100, 0, 0.1)',
              borderWidth: 2,
              tension: 0.1
            }
          ]
        };

        if (userPreferences.hasHVAC || userPreferences.hasEcologica) {
          formattedData.datasets.push({
            label: 'PM2.5 with Your Preferences',
            data: data.map(item => ({
              x: new Date(item.created_at),
              y: calculateAdjustedValue(item.pm25, userPreferences)
            })),
            borderColor: 'rgb(144, 238, 144)',
            backgroundColor: 'rgba(144, 238, 144, 0.1)',
            borderWidth: 2,
            tension: 0.1
          });
        }

        setChartData(formattedData);
      } catch (error) {
        console.error('Error fetching PM2.5 data:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (userPreferences.city) {
      fetchData();
    }
  }, [userPreferences]);

  const calculateAdjustedValue = (value, preferences) => {
    if (preferences.hasHVAC && preferences.hasEcologica) return value * 0.5;
    if (preferences.hasHVAC) return value * 0.7;
    if (preferences.hasEcologica) return value * 0.6;
    return value;
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading PM2.5 data: {error}</div>;
  if (!chartData) return <div>No PM2.5 data available</div>;

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
    <div className="chart-wrapper">
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
          name="Original PM2.5" 
          isActive={activeDatasets['Original PM2.5']} 
          onToggle={toggleDataset}
          color="rgb(0, 100, 0)"
        />
        {(hasHVAC || hasEcologica) && (
          <DatasetToggle 
            name="PM2.5 with Your Preferences" 
            isActive={activeDatasets['PM2.5 with Your Preferences']} 
            onToggle={toggleDataset}
            color="rgb(144, 238, 144)"
          />
        )}
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