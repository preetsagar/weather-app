import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "./../style.css";

function Input(props) {
  const [temp, setTemp] = useState(props.city);
  const [hover, setHover] = useState(false);

  // white typing
  const handleChange = (e) => {
    setTemp(e.target.value);
    // console.log(temp);
  };
  // when clicked
  const handleSearchButton = () => {
    // console.log("temp = ", temp);
    // console.log(" city = ", props.city);
    if (props.city.toLowerCase() !== temp.toLowerCase()) {
      props.setCity(temp.charAt(0).toUpperCase() + temp.slice(1));
    }
  };
  // when mouse enters the div area
  const handleMouseEnter = () => {
    setHover(true);
  };
  //   when mouse leaves the div area
  const handleMouseLeave = () => {
    setHover(false);
  };
  // style for Div
  const styleForDiv = {
    display: "flex",
    justifyContent: "center",
    height: "60px",
    alignItems: "center",
  };
  const style1 = {
    cursor: "pointer",
  };
  const style2 = {};

  const handleLocatioClick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const p = position.coords;
      // console.log(p.latitude, p.longitude);
      props.setLatitude(p.latitude);
      props.setLongitude(p.longitude);
    });
  };

  return (
    <div style={styleForDiv}>
      <input
        id="inputID"
        style={{ width: "300px", height: "25px", outline: "none" }}
        placeholder="search..."
        onChange={handleChange}
      />
      <SearchIcon
        style={{ paddingLeft: "20px", paddingRight: "5px", ...(hover ? style1 : style2) }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleSearchButton}
      />
      <LocationOnOutlinedIcon
        style={{ paddingRight: "20px", ...(hover ? style1 : style2) }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleLocatioClick}
      />
      <div
        style={{ paddingLeft: "60px", ...(hover ? style1 : style2) }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          props.setUnit("metric");
        }}
      >
        C°
      </div>
      |
      <div
        style={{ ...(hover ? style1 : style2) }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          props.setUnit("imperial");
        }}
      >
        F°
      </div>
    </div>
  );
}

export default Input;
