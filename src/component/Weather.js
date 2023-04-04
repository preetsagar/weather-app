import React from "react";
import WbTwilightOutlinedIcon from "@mui/icons-material/WbTwilightOutlined";
import DeviceThermostatOutlinedIcon from "@mui/icons-material/DeviceThermostatOutlined";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import AirIcon from "@mui/icons-material/Air";
import LightModeIcon from "@mui/icons-material/LightMode";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Weather() {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
        <div>
          <WbTwilightOutlinedIcon />
        </div>
        <div style={{ fontSize: "30px" }}>19°C</div>

        <div>
          <div style={{ display: "flex", fontSize: "10px" }}>
            <DeviceThermostatOutlinedIcon style={{ height: "15px" }} />
            <div style={{ paddingLeft: "5px", paddingRight: "10px" }}>temp</div>
            <div>18°C</div>
          </div>

          <div style={{ display: "flex", fontSize: "10px" }}>
            <InvertColorsIcon style={{ height: "15px" }} />
            <div style={{ paddingLeft: "5px", paddingRight: "10px" }}>humidity</div>
            <div>43%</div>
          </div>

          <div style={{ display: "flex", fontSize: "10px" }}>
            <AirIcon style={{ height: "15px" }} />
            <div style={{ paddingLeft: "5px", paddingRight: "10px" }}>air</div>
            <div>2 km/h</div>
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
        <div style={{ display: "flex", fontSize: "10px" }}>
          <LightModeIcon style={{ height: "15px" }} />
          <div style={{ paddingLeft: "5px", paddingRight: "10px" }}>Rise</div>
          <div>04:50 AM</div>
        </div>

        <div style={{ display: "flex", fontSize: "10px" }}>
          <WbTwilightOutlinedIcon style={{ height: "15px" }} />
          <div style={{ paddingLeft: "5px", paddingRight: "10px" }}>Set</div>
          <div>04:50 AM</div>
        </div>

        <div style={{ display: "flex", fontSize: "10px" }}>
          <ArrowUpwardIcon style={{ height: "15px" }} />
          <div style={{ paddingLeft: "5px", paddingRight: "10px" }}>High</div>
          <div>21°</div>
        </div>

        <div style={{ display: "flex", fontSize: "10px" }}>
          <ArrowDownwardIcon style={{ height: "15px" }} />
          <div style={{ paddingLeft: "5px", paddingRight: "10px" }}>Low</div>
          <div>21°</div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
