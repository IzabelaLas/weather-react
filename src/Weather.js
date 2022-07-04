import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <ul className="weather-info">
        <li>Thursday </li>
        <li>15:00</li>
        <h1>Warsaw</h1>
        <br />
      </ul>
      <div>
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
          alt="sunny"
          className="emoji"
        />
      </div>
      <div className="temperature">33°C</div>

      <div>
        <ul className="Description">
          <li>Precipitation: 17%</li>
          <li>Humidity 40%</li>
          <li>Wind 14 km/h</li>
        </ul>
      </div>
    </div>
  );
}
