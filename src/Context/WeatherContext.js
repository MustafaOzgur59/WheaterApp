import { createContext, useEffect, useState } from "react";

const WeatherContext = createContext();
const apiKey = "902aca56fdad42129077ac2aff64bbd7";

function WeatherDataProvider({ children }) {
  const [weatherForecastData, setWeatherForecastData] = useState();

  const fetchWeatherForecastData = async (cityName) => {
    const data = await fetch(
      "https://api.weatherbit.io/v2.0/forecast/daily?city=Ankara&key=902aca56fdad42129077ac2aff64bbd7"
    );
    const response = await data.json();
    console.log("Data is : ", response);
    setWeatherForecastData(response);
  };

  useEffect(() => {
    fetchWeatherForecastData("Ankara");
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        weatherForecastData,
        fetchWeatherForecastData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

const formatDate = (timestamp) => {
  let options = { hour: "2-digit", minute: "2-digit", weekday: "short" };

  const dateString = new Intl.DateTimeFormat("en-US", options).format(
    new Date(timestamp * 1000)
  );
  return {
    day: dateString.slice(0, 3),
    time: dateString.slice(3),
  };
};

export { WeatherContext, WeatherDataProvider, formatDate };
