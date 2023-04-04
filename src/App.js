import "./style.css";
import CityHeader from "./component/CityHeader";
import Input from "./component/Input";
import TimeAndDate from "./component/TimeAndDate";
import Weather from "./component/Weather";
import HourlyForecast from "./component/HourlyForecast";
import DailyForecast from "./component/DailyForecast";

function App() {
  return (
    <div style={{ display: "flex", width: "100%", height: "100%", justifyContent: "center" }}>
      <div className="App">
        <div>
          <CityHeader />
          <Input />
          <TimeAndDate />
          <Weather />
          <HourlyForecast />
          <DailyForecast />
        </div>
      </div>
    </div>
  );
}

export default App;
