import React, { useState } from "react";

function CityNameInHeader(props) {
  const [hover, setHover] = useState(false);

  //   When Mouse enters the div area
  const handleMouseEnter = () => {
    setHover(true);
  };
  //   when mouse leaves the div area
  const handleMouseLeave = () => {
    setHover(false);
  };
  //   when clicked
  const handleClick = () => {
    if (props.city.toLowerCase() !== props.cityName.toLowerCase()) {
      // console.log(props.cityName);
      props.setCity(props.cityName);
    }
  };

  //   style on mouse hover
  const styleOnHover = {
    cursor: "pointer",
  };
  //   style on mouse leaves
  const styleNotOnHover = {
    color: "White",
  };

  return (
    <div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={hover ? styleOnHover : styleNotOnHover}
        onClick={handleClick}
      >
        {props.cityName}
      </div>
    </div>
  );
}

export default CityNameInHeader;
