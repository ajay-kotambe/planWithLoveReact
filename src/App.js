import { useState } from "react";
import "./App.css";
import Tours from "./components/Tours";
import cities from "./Data";

function App() {
  const [toursData, setToursData] = useState(cities);

  return (
    <div>
      <Tours toursData={toursData} />
    </div>
  );
}

export default App;
