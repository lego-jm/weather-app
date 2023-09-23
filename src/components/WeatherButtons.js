import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const WeatherButtons = ({ initCity, select, city }) => {
  const handleCitySelect = (city) => {
    if (city !== "current") select(city);
    else select(null);
  };

  const upperChange = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return (
    <section className="buttons">
      <Button
        variant={`${city === null ? "outline-warning" : "warning"}`}
        onClick={() => handleCitySelect("current")}
      >
        Current Location
      </Button>
      {initCity.map((item, index) => (
        <Button
          variant={`${city === item ? "outline-warning" : "warning"} `}
          key={index}
          onClick={() => handleCitySelect(item)}
        >
          {upperChange(item)}
        </Button>
      ))}
    </section>
  );
};

export default WeatherButtons;
