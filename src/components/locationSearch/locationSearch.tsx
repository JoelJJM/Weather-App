import { useState } from "react";
import { locationDataFetch } from "./locationSearchLib";
import "./locationSearch.css";

function LocationSearch({ sendWeatherDataToParent }: any) {
  const [location, setLocation] = useState("London");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const result = await locationDataFetch(location);
      sendWeatherDataToParent(result);
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  };

  return (
    <div className="locationSearchContainer">
      <input
        type="text"
        placeholder="Enter a location..."
        value={location}
        onChange={handleInputChange}
        className="locationInput"
      />
      <button onClick={handleSearch} className="locationButton">
        Search
      </button>
    </div>
  );
}

export default LocationSearch;
