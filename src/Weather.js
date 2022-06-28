import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in Warsaw is ${response.data.main.temp}`);
  }
  let apiKey = "d21610d386e2cef043442f8f811868d1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return <h1>Hello from Weather</h1>;
}
