import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "./../style.css";
const apiID = process.env.REACT_APP_API_KEY;

function Input(props) {
  const [temp, setTemp] = useState();
  const [hover, setHover] = useState(false);

  // white typing
  const handleChange = (e) => {
    setTemp(e.target.value);
  };

  // when clicked
  const handleSearchButton = async () => {
    try {
      props.setLoading(true);
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${temp}&appid=${apiID}&units=${props.unit}`
      );
      if (!response.ok) throw "Wrong city name";
      response = await response.json();
      props.setWeather(response);
      props.setWeather(response);
      props.setLatitude(response.coord.lat);
      props.setLongitude(response.coord.lon);
      setTemp("");
    } catch (err) {
      alert(err);
      setTemp("");
    } finally {
      props.setLoading(false);
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
    props.setLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      const p = position.coords;
      props.setLatitude(p.latitude);
      props.setLongitude(p.longitude);
      props.setLoading(false);
    });
    setTimeout(() => {
      props.setLoading(false);
    }, 20000);
  };

  return (
    <div style={styleForDiv}>
      <input
        id="inputID"
        style={{ width: "300px", height: "25px", outline: "none" }}
        placeholder="search..."
        value={temp}
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
