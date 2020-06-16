import React, { useState, useEffect } from "react";
import WeatherCard from "./component";

const WeatherEngine = ({ location }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  const getWeather = async (q) => {
    setQuery("");
    setLoading(true);
    try {
      const apiRes = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&appid=9d8a119063bea234516fb6e4b4644485`
      );
      const resJSON = await apiRes.json();
      setWeather({
        temp: resJSON.main.temp,
        city: resJSON.name,
        condition: resJSON.weather[0].main,
        country: resJSON.sys.country,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };
  useEffect(() => {
    getWeather(location);
  }, [location]);
  return (
    <div>
      {!loading && !error ? (
        <div>
          <WeatherCard
            temp={weather.temp}
            condition={weather.condition}
            city={weather.city}
            country={weather.country}
          />
          <form>
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={(e) => handleSearch(e)}>Search</button>
          </form>
        </div>
      ) : loading ? (
        <div style={{ color: "black" }}>Loading</div>
      ) : !loading && error ? (
        <div>
          Error
          <br />
          <button style={{ color: "black" }} onClick={() => setError(false)}>
            Reset
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default WeatherEngine;
