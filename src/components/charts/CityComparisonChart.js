import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { supabase } from '../../supabaseClient';

const CityComparisonChart = ({ userPreferences }) => {
  const [chartData, setChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // First get all unique cities from weather_data table instead of user_preferences
        const { data: citiesData, error: citiesError } = await supabase
          .from('weather_data')
          .select('city')
          .distinct();

        if (citiesError) throw citiesError;

        const cities = citiesData.map(item => item.city);

        // Then fetch data for all cities
        const { data: weatherData, error: dataError } = await supabase
          .from('weather_data')
          .select('*')
          .in('city', cities)
          .order('created_at', { ascending: false });

        if (dataError) throw dataError;

        // Process data for each city
        const cityDatasets = cities.map((city, index) => {
          const cityData = weatherData.filter(item => item.city === city);
          const colors = [
            'rgb(0, 100, 0)',
            'rgb(144, 238, 144)',
            'rgb(34, 139, 34)',
            'rgb(60, 179, 113)'
          ];

          return {
            label: city,
            data: cityData.map(item => ({
              x: new Date(item.created_at),
              y: item.pm25
            })),
            borderColor: colors[index % colors.length],
            backgroundColor: colors[index % colors.length].replace('rgb', 'rgba').replace(')', ', 0.1)'),
            borderWidth: 2,
            tension: 0.1
          };
        });

        setChartData({
          datasets: cityDatasets
        });
        setError(null);
      } catch (err) {
        console.error('Error fetching city comparison data:', err);
        setError('Failed to load city comparison data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <div>Loading city comparison data...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!chartData) return <div>No city comparison data available</div>;

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
          text: 'PM2.5 μg/m³'
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
    <div style={{ height: '400px', width: '100%' }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default CityComparisonChart; 