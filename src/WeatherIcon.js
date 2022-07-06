import React from "react";
import "./Weather.css";
import {
  WiDaySunny,
  WiNightClear,
  WiDaySunnyOvercast,
  WiNightAltCloudy,
  WiNightAltCloudyHigh,
  WiCloudy,
  WiNightCloudy,
  WiCloud,
  WiNightAltShowers,
  WiDaySprinkle,
  WiDaySleet,
  WiDayThunderstorm,
  WiNightAltRainMix,
  WiNightAltThunderstorm,
  WiDaySnow,
  WiNightAltSnow,
  WiDayHaze,
  WiNightFog,
} from "react-icons/wi";
export default function WeatherIcon(response) {
  if (response.code === "01d") {
    return <WiDaySunny size={response.size} />;
  } else if (response.code === "01n") {
    return <WiNightClear size={response.size} />;
  } else if (response.code === "02d") {
    return <WiDaySunnyOvercast size={response.size} />;
  } else if (response.code === "02n") {
    return <WiNightAltCloudy size={response.size} />;
  } else if (response.code === "03d") {
    return <WiCloud size={response.size} />;
  } else if (response.code === "03n") {
    return <WiNightCloudy size={response.size} />;
  } else if (response.code === "04d") {
    return <WiCloudy size={response.size} />;
  } else if (response.code === "04n") {
    return <WiNightAltCloudyHigh size={response.size} />;
  } else if (response.code === "09d") {
    return <WiDaySprinkle size={response.size} />;
  } else if (response.code === "09n") {
    return <WiNightAltShowers size={response.size} />;
  } else if (response.code === "10d") {
    return <WiDaySleet size={response.size} />;
  } else if (response.code === "10n") {
    return <WiNightAltRainMix size={response.size} />;
  } else if (response.code === "11d") {
    return <WiDayThunderstorm size={response.size} />;
  } else if (response.code === "11n") {
    return <WiNightAltThunderstorm size={response.size} />;
  } else if (response.code === "13d") {
    return <WiDaySnow size={response.size} />;
  } else if (response.code === "13n") {
    return <WiNightAltSnow size={response.size} />;
  } else if (response.code === "50d") {
    return <WiDayHaze size={response.size} />;
  } else if (response.code === "50n") {
    return <WiNightFog size={response.size} />;
  }
}
