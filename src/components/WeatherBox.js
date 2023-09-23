import React from "react";

const WeatherBox = ({ weather }) => {
  const sliceTemp = (temp) => {
    return Math.floor(temp);
  };

  const currentTemp = sliceTemp(weather?.main.temp);
  const minTemp = sliceTemp(weather?.main.temp_min);
  const maxTemp = sliceTemp(weather?.main.temp_max);

  return (
    <section className="weather-box">
      <img
        src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
        alt=""
      />
      <h2>{weather?.name}</h2>
      <h1>
        현재 온도 {currentTemp}°C / {(weather?.main.temp * 9) / 5 + 32}°F
      </h1>
      <h2>
        최저 {minTemp}°C / 최고 {maxTemp}°C
      </h2>
      <h2>습도 {weather?.main.humidity}%</h2>
      <h2>{weather?.weather[0].description}</h2>
    </section>
  );
};

export default WeatherBox;
