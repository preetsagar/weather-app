import React from "react";
import WbTwilightOutlinedIcon from "@mui/icons-material/WbTwilightOutlined";
import DeviceThermostatOutlinedIcon from "@mui/icons-material/DeviceThermostatOutlined";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import AirIcon from "@mui/icons-material/Air";
import LightModeIcon from "@mui/icons-material/LightMode";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Weather(props) {
  function formatAMPM(date) {
    // console.log(date);
    date = new Date(date);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    // console.log(strTime);
    return strTime;
  }

  return (
    <div>
      {/* Temperature */}
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
        <div>
          {/* <WbTwilightOutlinedIcon /> */}
          <img src={`https://openweathermap.org/img/wn/${props.img}@2x.png`} alt="img" />
        </div>
        <div style={{ fontSize: "30px" }}>{parseInt(props.main.temp)}°</div>

        {/* Feels Like */}
        <div>
          <div style={{ display: "flex", fontSize: "10px" }}>
            <DeviceThermostatOutlinedIcon style={{ height: "15px" }} />
            <div style={{ paddingLeft: "5px", paddingRight: "10px" }}>feels like</div>
            <div>{parseInt(props.main.feels_like)}°</div>
          </div>

          {/* Humidity */}
          <div style={{ display: "flex", fontSize: "10px" }}>
            <InvertColorsIcon style={{ height: "15px" }} />
            <div style={{ paddingLeft: "5px", paddingRight: "10px" }}>humidity</div>
            <div>{parseInt(props.main.humidity)}%</div>
          </div>

          {/* Air */}
          <div style={{ display: "flex", fontSize: "10px" }}>
            <AirIcon style={{ height: "15px" }} />
            <div style={{ paddingLeft: "5px", paddingRight: "10px" }}>air</div>
            <div>
              {parseInt(props.wind)} {props.unit === "metric" ? "meter/sec" : "miles/hour"}
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        {/* Sun Rise */}
        <div style={{ display: "flex", fontSize: "10px" }}>
          <LightModeIcon style={{ height: "15px" }} />
          <div style={{ paddingLeft: "5px", paddingRight: "10px" }}>Rise</div>

          <div>{formatAMPM(props.time.sunrise * 1000)}</div>
        </div>

        {/* Sun set */}
        <div style={{ display: "flex", fontSize: "10px" }}>
          <WbTwilightOutlinedIcon style={{ height: "15px" }} />
          <div style={{ paddingLeft: "5px", paddingRight: "10px" }}>Set</div>
          <div>{formatAMPM(props.time.sunset * 1000)}</div>
        </div>

        {/* High temperature */}
        <div style={{ display: "flex", fontSize: "10px" }}>
          <ArrowUpwardIcon style={{ height: "15px" }} />
          <div style={{ paddingLeft: "5px", paddingRight: "10px" }}>High</div>
          <div>{parseInt(props.main.temp_max)}°</div>
        </div>

        {/* Low Temperature */}
        <div style={{ display: "flex", fontSize: "10px" }}>
          <ArrowDownwardIcon style={{ height: "15px" }} />
          <div style={{ paddingLeft: "5px", paddingRight: "10px" }}>Low</div>
          <div>{parseInt(props.main.temp_min)}°</div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
