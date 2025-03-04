import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import PM25Chart from '../../components/charts/PM25Chart';
import PM10Chart from '../../components/charts/PM10Chart';
import CityComparisonChart from '../../components/charts/CityComparisonChart';
import AnxietyRiskChart from '../../components/charts/AnxietyRiskChart';

// Utility function for deeper sleep calculation
const calculateDeeperSleepMinutes = (data, hasHVAC, hasEcologica) => {
  const getAdjustedValue = (value) => {
    if (hasHVAC && hasEcologica) return value * 0.5;
    if (hasHVAC) return value * 0.7;
    if (hasEcologica) return value * 0.6;
    return value;
  };

  const daysUnderThreshold = data.filter(day => {
    const adjustedValue = getAdjustedValue(parseFloat(day['PM 2.5']));
    return adjustedValue <= 5;
  }).length;

  return daysUnderThreshold * 8 * 60;
};

const Dashboard = () => {
  const [userPreferences, setUserPreferences] = useState({
    hasHVAC: false,
    hasEcologica: false,
    city: 'Toronto',
    firstName: '',
    anxietyLevel: 5
  });
  const [airQualityData, setAirQualityData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserPreferences = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const { data, error } = await supabase
          .from('user_preferences')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (error) throw error;
        
        if (data) {
          setUserPreferences({
            hasHVAC: data.has_HVAC || false,
            hasEcologica: data.has_ecologgica || false,
            city: data.city || 'Toronto',
            firstName: data.first_name || '',
            anxietyLevel: data.anxiety_base_level || 5
          });
        }
      } catch (error) {
        console.error('Error fetching preferences:', error);
      }
    };

    const fetchAirQualityData = async () => {
      try {
        // Get data from the weather_data table in Supabase
        const { data, error } = await supabase
          .from('weather_data')
          .select('*')
          .eq('city', userPreferences.city) // Filter by the user's city
          .order('created_at', { ascending: false })
          .limit(60);

        if (error) throw error;

        // Transform the data to match the expected format
        const transformedData = data.map(item => ({
          date: item.created_at,
          'PM 2.5': item.pm25,
          'PM 10': item.pm10,
          temp: item.temp,
          city: item.city
        }));
        
        setAirQualityData(transformedData);
      } catch (error) {
        console.error('Error fetching air quality data:', error);
        setAirQualityData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserPreferences();
    // Only fetch air quality data after we have the user's city
    if (userPreferences.city) {
      fetchAirQualityData();
    }

    const interval = setInterval(() => {
      if (userPreferences.city) {
        fetchAirQualityData();
      }
    }, 60 * 60 * 1000); // Refresh every hour

    return () => clearInterval(interval);
  }, [userPreferences.city]); // Re-run when city changes

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="dashboard">
      {airQualityData.length > 0 && (
        <div className="deeper-sleep-banner" style={{
          backgroundColor: '#90c789',
          color: '#1a472a',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '20px',
          textAlign: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold'
        }}>
          {calculateDeeperSleepMinutes(
            airQualityData, 
            userPreferences.hasHVAC, 
            userPreferences.hasEcologica
          ).toLocaleString()} minutes of deeper sleep
        </div>
      )}
      
      <h1>
        {userPreferences.firstName ? `${userPreferences.firstName}'s ` : ''}
        {userPreferences.city} Dashboard
      </h1>
      
      <div className="dashboard-container">
        <div className="dashboard-section">
          <h2>PM2.5 Levels</h2>
          <PM25Chart userPreferences={userPreferences} />
        </div>

        <div className="dashboard-section">
          <h2>PM10 Levels</h2>
          <PM10Chart userPreferences={userPreferences} />
        </div>

        <div className="dashboard-section">
          <h2>City Comparison</h2>
          <CityComparisonChart userPreferences={userPreferences} />
        </div>

        <div className="dashboard-section">
          <h2>Anxiety Risk</h2>
          <AnxietyRiskChart userPreferences={userPreferences} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;