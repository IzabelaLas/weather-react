import React from "react";
import "./Weather.css";
import { WiDaySunny } from "react-icons/wi";
import { IconContext } from "react-icons";

export default function Weather() {
  return (
    <IconContext.Provider value={{ size: "17em" }}>
      <div className="Weather">
        <ul className="weather-info">
          <li>Thursday </li>
          <li>15:00</li>
          <h1>Warsaw</h1>
          <br />
          <WiDaySunny className="emoji" />
        </ul>
        <span className="temperature">33</span>
        <span className="unit">°C</span>
        <div>
          <ul className="Description">
            <li>Precipitation: 17%</li>
            <li>Humidity 40%</li>
            <li>Wind 14 km/h</li>
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
}
