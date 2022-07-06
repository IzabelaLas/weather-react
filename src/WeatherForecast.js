import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    console.log(forecast);
    return (
      <div className="ForecastDays">
        <div className="row">
          <div className="col">
            <div className="WeatherForecastDay">Thu</div>
            <WeatherIcon code="11d" size={35} />
            <div className="WeatherForecastTepm">
              <span className="WeatherForecastTepmMax"></span>
              19°
              <span className="WeatherForecastTepmMin"> 10°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiKey = `d21610d386e2cef043442f8f811868d1`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
