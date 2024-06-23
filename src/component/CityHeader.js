import React from "react";
import CityNameInHeader from "./CityNameInHeader";

function CityHeader(props) {
  // style for div
  const styleForDiv = {
    display: "flex",
    width: "100%",
    height: "50px",
    justifyContent: "space-around",
    fontWeight: "lighter",
    alignItems: "center",
  };
  return (
    <div style={styleForDiv}>
      <CityNameInHeader cityName="Bengaluru" city={props.city} setCity={props.setCity} />
      <CityNameInHeader cityName="Satara" city={props.city} setCity={props.setCity} />
      <CityNameInHeader cityName="Hyderabad" city={props.city} setCity={props.setCity} />
      <CityNameInHeader cityName="Noida" city={props.city} setCity={props.setCity} />
    </div>
  );
}

export default CityHeader;
