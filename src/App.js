import "./App.css";
import WeatherSearch from "./WeatherSearch";
import Weather from "./Weather";
import React from "react";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <br />
        <WeatherSearch />
        <br />
        <Weather />
        <br />
      </div>
      <a href="https://github.com/IzabelaLas/weather-react">Open source-code</a>{" "}
      by Izabela Laszczuk
    </div>
  );
}
