import React from "react";

function TimeAndDate(props) {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      {/* <div> Tuesday, 31 May 2023 | Local time: 12:46 PM</div> */}
      <div style={{ fontSize: "20px", fontWeight: "bold", paddingTop: "20px", paddingBottom: "10px" }}>
        {props.city}, {props.country}
      </div>
      <div style={{ fontSize: "15px", paddingTop: "10px", paddingBottom: "20px", color: "cyan" }}>{props.weather}</div>
    </div>
  );
}

export default TimeAndDate;
