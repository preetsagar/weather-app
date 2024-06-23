import "./style.css";
import CityHeader from "./component/CityHeader";
import Input from "./component/Input";
import TimeAndDate from "./component/TimeAndDate";
import Weather from "./component/Weather";
import HourlyForecast from "./component/HourlyForecast";
import DailyForecast from "./component/DailyForecast";
import { useEffect, useState } from "react";
import { OrbitProgress } from "react-loading-indicators";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getWeatherAction, getWeatherColor } from "./utils.js/mapping";

export default App;

function App() {
  const [city, setCity] = useState("Chennai");
  const [unit, setUnit] = useState("metric");
  const [longitude, setLongitude] = useState("80.2785");
  const [latitude, setLatitude] = useState("13.0878");
  const [weather, setWeather] = useState();
  const [hourly, setHourly] = useState();
  const apiID = process.env.REACT_APP_API_KEY;
  const [loading, setLoading] = useState(true);

  const refreshData = async () => {
    try {
      setLoading(true);
      await callAPI();
      await callHourly();
    } catch (error) {
      console.error("Error refreshing data:", error);
    } finally {
      setLoading(false);
    }
  };

  const showNotification = (weatherCode) => {
    const action = getWeatherAction(weatherCode);
    if (action) {
      toast.info(action, { autoClose: 8000 });
    }
  };

  const callAPI = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiID}&units=${unit}`
      );
      if (!response.ok) throw new Error("City not found");
      const data = await response.json();
      setWeather(data);
      setLatitude(data.coord.lat);
      setLongitude(data.coord.lon);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const callHourly = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiID}&units=${unit}`
      );
      if (!response.ok) throw new Error("Error fetching forecast data");
      const data = await response.json();
      setHourly(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const callLatitudeLongitude = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiID}&units=${unit}`
      );
      if (!response.ok) throw new Error("Error fetching location data");
      const data = await response.json();
      setCity(data.name);
      setWeather(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    callAPI();
    callHourly();
  }, [city, unit]);

  useEffect(() => {
    // console.log("lon change", longitude, latitude, city);
    callLatitudeLongitude();
    callHourly();
  }, [longitude, latitude]);

  useEffect(() => {
    if (weather) {
      const weatherCode = weather.weather[0].id;
      showNotification(weatherCode);
      // console.log("weather code " + weatherCode);
    }
  }, [weather]);

  useEffect(() => {
    const intervalId = setInterval(refreshData, 1000 * 60 * 15); // Refresh every 15 minutes

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Loading Screen
  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <OrbitProgress variant="dotted" color="#505fcb" size="medium" text="Loading" textColor="" />
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: getWeatherColor(weather.weather[0].id),
        height: "100vh",
      }}
    >
      <ToastContainer />
      <div className="App">
        <div>
          <CityHeader setCity={setCity} city={city} />
          <Input
            setCity={setCity}
            city={city}
            unit={unit}
            loading={loading}
            setLatitude={setLatitude}
            setLongitude={setLongitude}
            setUnit={setUnit}
            setWeather={setWeather}
            setLoading={setLoading}
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
