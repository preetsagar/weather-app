import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";

function DayAndTemperature(props) {
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "10px", fontSize: "14px" }}
    >
      <div>{weekday[props.day]}</div>
      <div>
        <LightModeIcon />
      </div>
      <div>{parseInt(props.temp)}°</div>
    </div>
  );
}

export default DayAndTemperature;
