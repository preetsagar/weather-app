import React from "react";
import DayAndTemperature from "./DayAndTemperature";

function DailyForecast(props) {
  // console.log("Props data = ", props.data);
  const dailyArr = [];
  const dailyTemp = () => {
    dailyArr.push({
      day: new Date(parseInt(props.data.list[0].dt) * 1000).getDay(),
      temp: props.data.list[0].main.temp,
      icon: props.data.list[0].weather[0].icon,
    });

    for (let i = 1; i < props.data.list.length; i++) {
      // console.log(new Date(props.data.list[i].dt).getDay());
      if (
        new Date(parseInt(props.data.list[i].dt) * 1000).getDay() !==
        new Date(parseInt(props.data.list[i - 1].dt) * 1000).getDay()
      ) {
        dailyArr.push({
          day: new Date(parseInt(props.data.list[i].dt) * 1000).getDay(),
          temp: props.data.list[i].main.temp,
          icon: props.data.list[i].weather[0].icon,
        });
      }
    }
    // console.log(dailyArr);
  };
  dailyTemp();
  return (
    <div>
      <div
        style={{
          marginTop: "20px",
          marginLeft: "20px",
          marginRight: "20px",
          fontSize: "12px",
          borderBottom: "1px solid white",
        }}
      >
        DAILY FORECAST
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly", paddingBottom: "60px" }}>
        {/* <DayAndTemperature time={props.data.list[0].dt} temp={parseInt(props.data.list[0].main.temp)} /> */}
        {dailyArr.map((obj, index) => {
          if (index < 5) {
            return <DayAndTemperature day={obj.day} temp={obj.temp} key={index} icon={obj.icon} />;
          }
        })}
      </div>
    </div>
  );
}

export default DailyForecast;
