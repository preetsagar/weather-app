import React from "react";
import TimeAndTemperature from "./TimeAndTemperature";

function HourlyForecast() {
  return (
    <div>
      <div
        style={{
          marginTop: "20px",
          marginLeft: "20px",
          marginRight: "20px",
          fontSize: "12px",
          borderBottom: "1px solid white",
        }}
      >
        HOURLY FORECAST
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <TimeAndTemperature />
        <TimeAndTemperature />
        <TimeAndTemperature />
        <TimeAndTemperature />
        <TimeAndTemperature />
      </div>
    </div>
  );
}

export default HourlyForecast;
