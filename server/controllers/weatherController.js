const supabase = require('../db/database');

exports.getWeatherData = async (req, res) => {
  try {
    const { city, days = 60 } = req.query;
    
    console.log('1. Starting data fetch from Supabase...');
    
    // Calculate cutoff date for last 60 days
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);

    console.log('2. Querying with params:', {
      cutoffDate: cutoffDate.toISOString(),
      city: city || 'all cities'
    });

    // Build the query
    let query = supabase
      .from('weather_data')
      .select('*')
      .gte('created_at', cutoffDate.toISOString())
      .order('created_at', { ascending: true });

    if (city) {
      query = query.eq('city', city);
    }

    const { data, error } = await query;

    console.log('3. Supabase query results:', {
      success: !error,
      recordCount: data?.length || 0,
      timeRange: {
        oldest: data?.[0]?.created_at,
        newest: data?.[data?.length - 1]?.created_at
      }
    });

    if (error) throw error;

    // Transform data to match the expected format
    const transformedData = data.map(item => ({
      date: new Date(item.created_at),
      'PM 2.5': item.pm25,
      'PM 10': item.pm10,
      city: item.city,
      temp: item.temp
    }));

    console.log('4. Data transformation complete:', {
      originalCount: data.length,
      transformedCount: transformedData.length,
      sampleRecord: transformedData[0]
    });

    res.json(transformedData);
  } catch (error) {
    console.error('ERROR in getWeatherData:', error);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
}; 