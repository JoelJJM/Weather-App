import { useRef, useState } from "react";
import "./App.css";
import LocationSearch from "./components/locationSearch/locationSearch";

function App() {
  // Keeping track of the scroll reference through an array of references
  const scrollRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  // Tracking current section using useState to determine current output
  const [currentSection, setCurrentSection] = useState(0);

  // Function to scroll to a section by index
  const scrollFunctionality = (sectionIndex: number) => {
    if (sectionIndex >= 0 && sectionIndex < scrollRefs.length) {
      setCurrentSection(sectionIndex);
      scrollRefs[sectionIndex].current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function handling logic behind scrolling with mouse wheel
  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    const deltaY = e.deltaY;

    if (deltaY > 0 && currentSection < scrollRefs.length - 1) {
      // Scrolling down
      scrollFunctionality(currentSection + 1);
    } else if (deltaY < 0 && currentSection > 0) {
      // Scrolling up
      scrollFunctionality(currentSection - 1);
    }
  };

  // Function to handle logic behind clicking up or down buttons
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const direction = e.currentTarget.value;

    if (direction === "up" && currentSection > 0) {
      scrollFunctionality(currentSection - 1);
    }

    if (direction === "down" && currentSection < scrollRefs.length - 1) {
      scrollFunctionality(currentSection + 1);
    }
  };

  return (
    <div className="page-container" onWheel={(e) => handleScroll(e)}>
      <div className="page-section">
        <button value="up" className="scroll-button-up" onClick={handleClick}>
          <p className="chevron-up">^</p>
        </button>

        <div className="page-section" ref={scrollRefs[0]}>
          <h1>Weather Application</h1>
          <h2>Search for a location to get the current weather.</h2>
        </div>

        <button
          value="down"
          className="scroll-button-down"
          onClick={handleClick}
        >
          <p className="chevron-down">^</p>
        </button>
      </div>

      <div className="page-section" ref={scrollRefs[1]}>
        <LocationSearch />
      </div>

      <div className="page-section" ref={scrollRefs[2]}>
        <h1>This is a placeholder text!</h1>
      </div>
    </div>
  );
}

export default App;
