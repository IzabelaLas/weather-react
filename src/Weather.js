import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import { WiDaySunny } from "react-icons/wi";
import { IconContext } from "react-icons";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      date: "Thursday",
      time: "15:00",
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "d21610d386e2cef043442f8f811868d1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        autoFocus="on"
        class="searchForm btn btn-outline-light btn-block btn-lg"
        onChange={updateCity}
      />
    </form>
  );

  if (loaded) {
    return (
      <IconContext.Provider value={{ size: "17em" }}>
        <div className="Weather">
          {form}
          <ul className="weather-info">
            <li>{weather.date} </li>
            <li>{weather.time}</li>
            <h1>{weather.city}</h1>
            <br />
            <WiDaySunny className="emoji" />
          </ul>
          <span className="temperature">{Math.round(weather.temperature)}</span>
          <span className="unit">°C</span>
          <div>
            <ul className="Description">
              <li>Humidity {weather.humidity}%</li>
              <li>Wind {Math.round(weather.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    );
  } else {
    const apiKey = "d21610d386e2cef043442f8f811868d1";
    let city = "Warsaw";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);

    return "Loading...";
  }
}
