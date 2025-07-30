import "./locationDisplay.css";

export default function LocationDisplay({
  locationData,
}: {
  locationData: any;
}) {
  if (!locationData) {
    return null; // or return a loading message or placeholder
  }

  const { name, coord, main, weather, wind, clouds, sys, visibility } =
    locationData;

  const tempCelsius = (k: number) => `${Math.round(k - 273.15)}°C`;

  return (
    <div className="locationDisplayContainer">
      <h2 className="locationTitle">
        Weather in {name}, {sys.country}
      </h2>
      <div className="weatherGrid">
        <div className="weatherItem">
          <strong>Temperature:</strong> {tempCelsius(main.temp)}
        </div>
        <div className="weatherItem">
          <strong>Feels Like:</strong> {tempCelsius(main.feels_like)}
        </div>
        <div className="weatherItem">
          <strong>Min/Max:</strong> {tempCelsius(main.temp_min)} /{" "}
          {tempCelsius(main.temp_max)}
        </div>
        <div className="weatherItem">
          <strong>Weather:</strong> {weather[0].description}
        </div>
        <div className="weatherItem">
          <strong>Humidity:</strong> {main.humidity}%
        </div>
        <div className="weatherItem">
          <strong>Pressure:</strong> {main.pressure} hPa
        </div>
        <div className="weatherItem">
          <strong>Wind:</strong> {wind.speed} m/s at {wind.deg}°
        </div>
        <div className="weatherItem">
          <strong>Cloud Cover:</strong> {clouds.all}%
        </div>
        <div className="weatherItem">
          <strong>Visibility:</strong> {visibility} m
        </div>
        <div className="weatherItem">
          <strong>Coordinates:</strong> [{coord.lat}, {coord.lon}]
        </div>
      </div>
    </div>
  );
}
