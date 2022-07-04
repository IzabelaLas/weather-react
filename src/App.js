import "./App.css";
import WeatherSearch from "./WeatherSearch";
import Weather from "./Weather";
import React from "react";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherSearch />
        <Weather />
        <br />
      </div>
      <footer>
        <a
          href="https://github.com/IzabelaLas/weather-react"
          target="_blank"
          rel="noopener noreferrer"
          className="footer"
        >
          Open source-code
        </a>{" "}
        by Izabela Laszczuk
      </footer>
    </div>
  );
}
