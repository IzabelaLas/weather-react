import React from "react";

export default function WeatherTemperature(weather) {
  return (
    <span>
      <span className="temperature">{Math.round(weather.celsius)}</span>
      <span className="unit">°C</span>
    </span>
  );
}
