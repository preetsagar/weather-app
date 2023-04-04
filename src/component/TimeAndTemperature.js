import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";

function TimeAndTemperature() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "10px", fontSize: "14px" }}
    >
      <div>01:00 PM</div>
      <div>
        <LightModeIcon />
      </div>
      <div>21°</div>
    </div>
  );
}

export default TimeAndTemperature;
