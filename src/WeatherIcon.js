import React from "react";
import { WiDaySunny } from "react-icons/wi";
import { IconContext } from "react-icons";

export default function WeatherIcon(props) {
  if (props.code === "01d") {
    <IconContext.Provider value={{ size: "17em" }}>
      return (
      <WiDaySunny className="emoji" />
      );
    </IconContext.Provider>;
  }
}
