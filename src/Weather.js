import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Warsaw</h1>
      <ul>
        <li>Thursday 15:00</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
          />
          33°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 17%</li>
            <li>Humidity 40%</li>
            <li>Wind 14 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
