import { useContext } from "react";
import { WeatherContext, formatDate } from "../Context/WeatherContext";
import { DarkModeContext } from "../Context/DarkModeContext";

function Days() {
  const { weatherForecastData } = useContext(WeatherContext);
  const { darkMode } = useContext(DarkModeContext);

  if (weatherForecastData) {
    console.log("Data in days : ", weatherForecastData);
  }
  return (
    <div
      className={`flex flex-1 
      } p-6 gap-2 `}
    >
      {weatherForecastData
        ? weatherForecastData.data.map((day) => {
            console.log("Day icon : ", day.weather.icon);
            return (
              <div
                key={day.ts}
                className="flex flex-col justify-center items-center rounded-md flex-1 p-3 border"
              >
                <p>{formatDate(day.ts).day}</p>
                <img
                  src={`Assets/${day.weather.icon}.png`}
                  alt="weather image"
                />
                <p>{day.temp} °C</p>
              </div>
            );
          })
        : "DATA İS LOADİNG"}
    </div>
  );
}

export default Days;
