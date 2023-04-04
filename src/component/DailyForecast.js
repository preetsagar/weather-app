import React from "react";
import DayAndTemperature from "./DayAndTemperature";

function DailyForecast() {
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
        DAILY FORECAST
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly", paddingBottom: "60px" }}>
        <DayAndTemperature />
        <DayAndTemperature />
        <DayAndTemperature />
        <DayAndTemperature />
        <DayAndTemperature />
      </div>
    </div>
  );
}

export default DailyForecast;
