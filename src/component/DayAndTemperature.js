import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";

function DayAndTemperature() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "10px", fontSize: "14px" }}
    >
      <div>Sun</div>
      <div>
        <LightModeIcon />
      </div>
      <div>21°</div>
    </div>
  );
}

export default DayAndTemperature;
