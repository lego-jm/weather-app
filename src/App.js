import { useEffect, useState } from "react";
import "./App.css";
import WeatherBox from "./components/WeatherBox";
import WeatherButtons from "./components/WeatherButtons";
import ClipLoader from "react-spinners/ClipLoader";

const initCity = ["seoul", "fukuoka", "suwon", "hwaseong"];

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      getCurrentWeather(lat, lon);
    });
  };

  const getCurrentWeather = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0a5934896847101714c0d2a53ee7044d&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (e) {
      setError(`에러가 발생했습니다, ${e.message}`);
      setLoading(false);
    }
  };
  const getCityWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0a5934896847101714c0d2a53ee7044d&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (e) {
      setError(`에러가 발생했습니다, ${e.message}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    if (city === null) getCurrentLocation();
    else getCityWeather();
  }, [city]);

  return (
    <>
      {loading ? (
        <main className="container">
          <ClipLoader
            color="#ffa07a"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </main>
      ) : !error ? (
        <main className="container">
          <WeatherBox weather={weather} />
          <WeatherButtons initCity={initCity} select={setCity} city={city} />
        </main>
      ) : (
        <main className="container">{error}</main>
      )}
    </>
  );
}

export default App;
