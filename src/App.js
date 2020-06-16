import React from "react";
import WeatherEngine from "./components/WeatherCard/weatherEngine";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherEngine location="Omaha, us" />
      {/* <WeatherEngine location="Lincon, us" /> */}
    </div>
  );
}
export default App;
