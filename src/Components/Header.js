import React, { useContext, useState, useCallback } from "react";
import { DarkModeContext } from "../Context/DarkModeContext";
import { WeatherContext } from "../Context/WeatherContext";
import ReactSwitch from "react-switch";
function Header() {
  const [cityName, setCityName] = useState("");
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { fetchWeatherForecastData } = useContext(WeatherContext);
  const onChangeInput = useCallback((e) => {
    setCityName(e.target.value);
  }, []);

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      fetchWeatherForecastData(e.target.value);
    }
  };

  return (
    <div className={` flex justify-between p-6 py-2 `}>
      <input
        type="text"
        placeholder="Enter city"
        className="w-2/5 rounded-full p-3 py-1 text-black "
        value={cityName}
        onChange={(e) => {
          onChangeInput(e);
        }}
        onKeyDown={(e) => {
          handleEnterPress(e);
        }}
      />
      <div className="flex flex-col gap-2">
        {darkMode ? "Dark Mode" : "Light Mode"}
        <ReactSwitch onChange={toggleDarkMode} checked={darkMode === true} />
      </div>
    </div>
  );
}

export default React.memo(Header);
