import { useState } from "react";
import "./App.css";
import Tours from "./components/Tours";
import cities from "./Data";

function App() {
  const [toursData, setToursData] = useState(cities);

  if (toursData.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left...</h2>
        <button className="refresh-btn" onClick={() => setToursData(cities)}>
          Refresh
        </button>
      </div>
    );
  }

  const removeCardHandler = (id) => {
    const newTours = toursData.filter((tour) => tour.id !== id);
    setToursData(newTours);
  };
  console.log(toursData);

  return (
    <div className="app">
      <Tours toursData={toursData} removeTour={removeCardHandler} />
    </div>
  );
}

export default App;
