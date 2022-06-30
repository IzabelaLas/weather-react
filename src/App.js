import "./App.css";
import WeatherSearch from "./WeatherSearch";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <WeatherSearch />
        <br />
        <a href="https://github.com/IzabelaLas/weather-react">
          Open source-code
        </a>{" "}
        by Izabela Laszczuk
      </div>
    </div>
  );
}
