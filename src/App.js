import React from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  const data = async () => {
    const apiRes = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=9d8a119063bea234516fb6e4b4644485"
    );
    const resJSON = await apiRes.json();
    return resJSON;
  };
  data().then((res) => console.log(res));
  return (
    <div className="App">
      <WeatherCard temp={-20} condition="Clear" city="Omaha" country="USA" />
      <WeatherCard temp={20} condition="Tornado" city="test" country="test" />
    </div>
  );
}

export default App;
