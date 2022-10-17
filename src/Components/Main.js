import React, { useContext, useEffect } from "react";
import { WeatherContext, formatDate } from "../Context/WeatherContext";
import { DarkModeContext } from "../Context/DarkModeContext";

function Main() {
  const { weatherForecastData } = useContext(WeatherContext);
  const { darkMode } = useContext(DarkModeContext);

  let iconPath = "Assets/";

  useEffect(() => {
    console.log("Weather data : ", weatherForecastData);
  }, [weatherForecastData]);

  if (weatherForecastData !== undefined) {
    iconPath += weatherForecastData.data[0].weather.icon + ".jpeg";
  }

  return (
    <div className={`flex  md:flex-col lg:flex-row  p-4 gap-2 `}>
      <div className="flex flex-col md:w-full lg:max-w-md w-2/6 gap-2 p-6 border rounded-md">
        {weatherForecastData !== undefined ? (
          <>
            <div className="p-2 flex flex-col items-center justify-center">
              <p className="text-5xl mb-6">{weatherForecastData.city_name}</p>
              <p className="text-2xl">{weatherForecastData.country_code}</p>
            </div>
            <div className="p-2 flex justify-center flex-col items-center">
              <img
                src={`Assets/${weatherForecastData.data[0].weather.icon}.png`}
                alt="Weather icon"
                className="h-36 w-40"
              />
              <p>{weatherForecastData.data[0].weather.description}</p>
              <p>Temperature : {weatherForecastData.data[0].temp} °C</p>
              <div>{formatDate(weatherForecastData.data[0].ts).day}</div>
            </div>
          </>
        ) : (
          "Loaddinggg!!!"
        )}
      </div>
      <div className="flex flex-1   justify-center   gap-2 p-6 border rounded-md">
        {weatherForecastData ? (
          <>
            <div className="p-5 flex flex-1 flex-col justify-start gap-5">
              <p>Temperatures</p>
              <div className="flex items-center">
                <div>Max : {weatherForecastData.data[0].max_temp}°C</div>
                <img
                  src="Assets/thermometer-warmer.svg"
                  alt="warm"
                  className="h-24 w-24"
                />
              </div>
              <div className="flex items-center">
                <div>Min : {weatherForecastData.data[0].min_temp}°C</div>
                <img
                  src="Assets/thermometer-colder.svg"
                  alt="cold"
                  className="h-24 w-24"
                />
              </div>
            </div>
            <div className="border-l p-5 flex flex-1 flex-col justify-start  gap-5 ">
              <p>Humidity</p>
              <div className="flex items-center">
                <div>{weatherForecastData.data[0].rh} %</div>
                <img src="Assets/humidity.svg" alt="" className="h-24 w-24" />
              </div>
            </div>
            <div className="border-l flex-1 p-5 flex flex-col justify-start gap-5">
              <p>Sun Info</p>
              <div>
                Sun Rise:
                {formatDate(weatherForecastData.data[0].sunrise_ts).time}
                <img src="Assets/sunrise.svg" alt="" className="h-24 w-24" />
              </div>
              <div>
                Sun Set:{" "}
                {formatDate(weatherForecastData.data[0].sunset_ts).time}
                <img src="Assets/sunset.svg" alt="" className="h-24 w-24" />
              </div>
            </div>
            <div className="border-l flex-1 p-5 flex flex-col justify-start gap-5">
              <p>Wind Status</p>
              <div className="flex items-center">
                <div>Speed : {weatherForecastData.data[0].wind_spd}</div>
                <img src="Assets/windsock.svg" alt="" className="h-24 w-24" />
              </div>
              <div className="flex gap-4">
                <div>Angle : {weatherForecastData.data[0].wind_dir}</div>
                <img
                  src="Assets/compass.svg"
                  alt="angle"
                  style={{
                    transform: `rotate(${weatherForecastData.data[0].wind_dir}deg)`,
                  }}
                  className="h-16 w-16"
                />
              </div>
              <div>
                Direction : {weatherForecastData.data[0].wind_cdir_full}
              </div>
            </div>
          </>
        ) : (
          "Loadingggg..."
        )}
      </div>
    </div>
  );
}

export default Main;
