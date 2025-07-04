import "./locationSearch.module.css";

import { useState } from "react";

function LocationSearch() {
  const [geolocation, setGeolocation] = useState<number[]>([]);
  //   const [cityName, setCityName] = useState<string>("London");
  const cityName = "London"; // Hardcoded for simplicity, can be replaced with a state variable if needed

  function handleClick() {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${1}&appid=${
        import.meta.env.VITE_OPENWEATHER_API_KEY
      }`
    );
    xhr.onload = function () {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText)[0];
        console.log(response.lat, response.lon, response);
        setGeolocation([response.lat, response.lon]);
      }
    };
    xhr.send();
  }

  return (
    <div>
      <button onClick={handleClick}>Get Data</button>
      {geolocation[0] ? (
        <div className="">{JSON.stringify(geolocation)}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default LocationSearch;
