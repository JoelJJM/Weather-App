import { useEffect, useState } from "react";
import "./locationSearch.module.css";

function LocationSearch() {
  const [location, setLocation] = useState("london");

  useEffect(() => {
    fetch(
      "https://api.geocode.earth/v1/search?" +
        `api_key=${import.meta.env.REACT_APP_API_KEY}&` +
        "text=London"
    );
  }, [location]);

  return <div></div>;
}

export default LocationSearch;
