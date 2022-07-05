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
    return <WiDaySunny className="emoji" />;
  } else if (response.code === "01n") {
    return <WiNightClear className="emoji" />;
  } else if (response.code === "02d") {
    return <WiDaySunnyOvercast className="emoji" />;
  } else if (response.code === "02n") {
    return <WiNightAltCloudy className="emoji" />;
  } else if (response.code === "03d") {
    return <WiCloud className="emoji" />;
  } else if (response.code === "03n") {
    return <WiNightCloudy className="emoji" />;
  } else if (response.code === "04d") {
    return <WiCloudy className="emoji" />;
  } else if (response.code === "04n") {
    return <WiNightAltCloudyHigh className="emoji" />;
  } else if (response.code === "09d") {
    return <WiDaySprinkle className="emoji" />;
  } else if (response.code === "09n") {
    return <WiNightAltShowers className="emoji" />;
  } else if (response.code === "10d") {
    return <WiDaySleet className="emoji" />;
  } else if (response.code === "10n") {
    return <WiNightAltRainMix className="emoji" />;
  } else if (response.code === "11d") {
    return <WiDayThunderstorm className="emoji" />;
  } else if (response.code === "11n") {
    return <WiNightAltThunderstorm className="emoji" />;
  } else if (response.code === "13d") {
    return <WiDaySnow className="emoji" />;
  } else if (response.code === "13n") {
    return <WiNightAltSnow className="emoji" />;
  } else if (response.code === "50d") {
    return <WiDayHaze className="emoji" />;
  } else if (response.code === "50n") {
    return <WiNightFog className="emoji" />;
  }
}
