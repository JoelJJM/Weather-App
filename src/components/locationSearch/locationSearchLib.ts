export async function locationDataFetch(location: string) {
  try {
    const geoResponse = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${
        import.meta.env.VITE_OPENWEATHER_API_KEY
      }`
    );
    const geoData = await geoResponse.json();
    const geolocation = geoData[0];

    if (!geolocation) {
      throw new Error("No geolocation data found");
    }

    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${
        geolocation.lat
      }&lon=${geolocation.lon}&appid=${
        import.meta.env.VITE_OPENWEATHER_API_KEY
      }`
    );
    const weatherData = await weatherResponse.json();
    return weatherData;
    // Handle the data as needed
  } catch (error) {
    console.error("Error fetching location or weather data:", error);
  }
}
