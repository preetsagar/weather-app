import "./style.css";
import CityHeader from "./component/CityHeader";
import Input from "./component/Input";
import TimeAndDate from "./component/TimeAndDate";
import Weather from "./component/Weather";
import HourlyForecast from "./component/HourlyForecast";
import DailyForecast from "./component/DailyForecast";
import { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState("Chennai");
  const [unit, setUnit] = useState("metric");
  const [longitude, setLongitude] = useState("80.2785");
  const [latitude, setLatitude] = useState("13.0878");
  const [weather, setWeather] = useState();
  const [hourly, setHourly] = useState();
  let apiID = "";

  const callAPI = async () => {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiID}&units=${unit}`
    );
    response = await response.json();
    setWeather(response);
    setLatitude(response.coord.lat);
    setLongitude(response.coord.lon);
    // console.log("Calling API", city, response.coord.lon, response.coord.lat);
    // console.log("Response = ", response);
  };
  const callHourly = async () => {
    // console.log("Calling API");
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiID}&units=${unit}`
    );
    response = await response.json();
    setHourly(response);
    // console.log("Response = ", response);
  };
  const callLatitudeLongitude = async () => {
    console.log(city, longitude, latitude);
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiID}&units=${unit}`
    );
    response = await response.json();
    setCity(response.name);
    setWeather(response);
    console.log(city, response.coord.lon, response.coord.lat);
    console.log(city, response.name);
    // setLatitude(response.coord.lat);
    // setLongitude(response.coord.lon);
  };

  useEffect(() => {
    callAPI();
    callHourly();
  }, [city, unit]);

  useEffect(() => {
    console.log("lon change", longitude, latitude, city);
    callLatitudeLongitude();
    callHourly();
  }, [longitude, latitude]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="App">
        <div>
          <CityHeader setCity={setCity} city={city} />

          <Input
            setCity={setCity}
            city={city}
            setLatitude={setLatitude}
            setLongitude={setLongitude}
            setUnit={setUnit}
          />

          {weather && hourly && (
            <TimeAndDate weather={weather.weather[0].main} city={city} country={weather.sys.country} />
          )}

          {weather && hourly && (
            <Weather
              main={weather.main}
              wind={weather.wind.speed}
              time={weather.sys}
              timShift={weather.timezone}
              unit={unit}
              img={weather.weather[0].icon}
            />
          )}

          {weather && hourly && <HourlyForecast data={hourly} />}

          {weather && hourly && <DailyForecast data={hourly} />}
        </div>
      </div>
    </div>
  );
}

export default App;
