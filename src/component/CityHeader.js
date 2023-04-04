import React from "react";

function CityHeader() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "50px",
        justifyContent: "space-around",
        fontWeight: "lighter",
        alignItems: "center",
      }}
    >
      <div>Bengluru</div>
      <div>Pune</div>
      <div>Noida</div>
      <div>Hydrabad</div>
    </div>
  );
}

export default CityHeader;
