import { useRef, useState } from "react";
import "./App.css";
// import LocationSearch from "./components/locationSearch/locationSearch";

function App() {
  //Keeping track of the scroll reference through an array of references
  // This allows us to scroll to different sections of the page
  const [scrollReference, setScrollReference] = useState([
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]);

  const [currentSection, setCurrentSection] = useState(0);

  const handleClick = () => {
    scrollReference.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaY > 0) {
      setCurrentSection((prev) => (prev -= 1));
      scrollReference[currentSection].current?.scrollIntoView({
        behavior: "smooth",
      });
    }
    if (e.deltaY < 0) {
      setCurrentSection((prev) => (prev += 1));
      console.log("Scrolling up");
    }
  };

  return (
    <div className="page-container" onWheel={(e) => handleScroll(e)}>
      <div className="page-section">
        <button className="scroll-button-up" onClick={handleClick}>
          <p className="">^</p>
        </button>

        <div className="page-section" ref={}>
          <h1>Weather Application</h1>
          <h2>Search for a location to get the current weather.</h2>
        </div>

        <button className="scroll-button-down" onClick={handleClick}>
          <p className="chevron-down">^</p>
        </button>
      </div>

      <div ref={scrollReference[0]} className="page-section">
        <input placeholder="This is a test input" />
      </div>
    </div>
  );
}

export default App;
