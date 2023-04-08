import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";

function TimeAndTemperature(props) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "10px", fontSize: "14px" }}
    >
      <div>{props.time}</div>
      <div>
        <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} style={{ height: "35px" }} />
      </div>
      <div>{props.temp}°</div>
    </div>
  );
}

export default TimeAndTemperature;
