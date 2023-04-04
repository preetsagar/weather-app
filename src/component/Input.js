import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "./../style.css";

function Input() {
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "60px", alignItems: "center" }}>
      <input id="inputID" style={{ width: "300px", height: "25px", outline: "none" }} placeholder="search..." />

      <SearchIcon style={{ paddingLeft: "20px", paddingRight: "5px" }} />
      <LocationOnOutlinedIcon style={{ paddingRight: "20px" }} />
      <div style={{ paddingLeft: "60px" }}>C° | F°</div>
    </div>
  );
}

export default Input;
