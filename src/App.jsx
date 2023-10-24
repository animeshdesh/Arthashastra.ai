import { useState } from "react";
import Table from "./components/Table";
import Graph from "./components/Graph";
import "./App.css";
const data = [
  {
    Id: 1,
    Year: 2004,
    Medals: 1,
  },
  {
    Id: 2,
    Year: 2008,
    Medals: 3,
  },
  {
    Id: 3,
    Year: 2012,
    Medals: 6,
  },
  {
    Id: 4,
    Year: 2016,
    Medals: 2,
  },
  {
    Id: 5,
    Year: 2020,
    Medals: 7,
  },
];

function App() {
  // State to track which component is currently displayed
  const [activeComponent, setActiveComponent] = useState("table");

  const handleButtonClick = (componentName) => {
    setActiveComponent(componentName);
  };
  return (
    <>
      <div className="Buttons">
        <button
          className={activeComponent === "table" ? "active" : ""}
          onClick={() => handleButtonClick("table")}
        >
          Table
        </button>
        <button
          className={activeComponent === "graph" ? "active" : ""}
          onClick={() => handleButtonClick("graph")}
        >
          Graph
        </button>
      </div>
      <div className="mainContainer">
        {activeComponent === "table" && <Table data={data} />}
        {activeComponent === "graph" && <Graph data={data} />}
      </div>
    </>
  );
}

export default App;
