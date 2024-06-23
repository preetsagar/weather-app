import React from "react";
import TimeAndTemperature from "./TimeAndTemperature";

function HourlyForecast(props) {
  let data = props.data.list.slice(0, 5);
  function formatAMPM(date) {
    date = new Date(date);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

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
        {data.map((obj, index) => {
          return (
            <TimeAndTemperature
              time={formatAMPM(obj.dt * 1000)}
              temp={parseInt(obj.main.temp)}
              icon={obj.weather[0].icon}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HourlyForecast;
