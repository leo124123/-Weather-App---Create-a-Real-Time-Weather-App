import { useEffect, useState, StrictMode } from "react";
import Header from "./components/header.jsx";
import Current from "./components/CurrentWeather.jsx";
import Forecast from "./components/Forecast.jsx";
import Highlights from "./components/Highlights.jsx";
import HourlyForecast from "./components/HourlyForecast.jsx";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export default function App() {

  const [city, setCity] = useState("Santo Domingo");
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [hourly, setHourly] = useState([]);
  const [highlights, setHighlights] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeatherByCity(city);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  // ================= CITY =================
  async function fetchWeatherByCity(cityName) {
    try {
      setLoading(true);
      setError(null);

      const currentRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric&lang=es`
      );

      if (!currentRes.ok) throw new Error("Ciudad no encontrada");

      const currentData = await currentRes.json();

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric&lang=es`
      );

      const forecastData = await forecastRes.json();

      processData(currentData, forecastData);

    } catch (err) {
      setError(err.message || "Error de conexión");
    } finally {
      setLoading(false);
    }
  }

  // ================= GPS =================
  function fetchWeatherByLocation() {
    if (!navigator.geolocation) {
      setError("Tu navegador no soporta GPS");
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(async (pos) => {
      try {
        const { latitude, longitude } = pos.coords;

        const currentRes = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=es`
        );

        const currentData = await currentRes.json();

        const forecastRes = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=es`
        );

        const forecastData = await forecastRes.json();

        processData(currentData, forecastData);

      } catch {
        setError("No se pudo obtener tu ubicación");
      } finally {
        setLoading(false);
      }
    }, () => {
      setLoading(false);
      setError("Permiso de ubicación denegado");
    });
  }

  // ================= PROCESS =================
  function processData(currentData, forecastData) {

    setCurrent({
      temp: Math.round(currentData.main.temp),
      description: currentData.weather[0].description,
      icon: currentData.weather[0].icon,
      date: new Date(currentData.dt * 1000),
      city: currentData.name,
      country: currentData.sys.country
    });

    setHighlights({
      humidity: currentData.main.humidity,
      pressure: currentData.main.pressure,
      feels: Math.round(currentData.main.feels_like),
      visibility: currentData.visibility,
      sunrise: new Date(currentData.sys.sunrise * 1000),
      sunset: new Date(currentData.sys.sunset * 1000),
      wind: currentData.wind.speed
    });

    const now = Date.now();

    const todayHours = forecastData.list
      .filter(item => new Date(item.dt * 1000).getTime() > now)
      .slice(0, 8);

    setHourly(todayHours.map(item => ({
      time: new Date(item.dt * 1000),
      temp: Math.round(item.main.temp),
      wind: item.wind.speed,
      icon: item.weather[0].icon
    })));

    const days = {};
    forecastData.list.forEach(item => {
      const day = new Date(item.dt * 1000).toDateString();
      if (!days[day]) days[day] = item;
    });

    setForecast(Object.values(days).slice(0, 5).map(item => ({
      date: new Date(item.dt * 1000),
      temp: Math.round(item.main.temp),
      icon: item.weather[0].icon
    })));
  }

  return (
    <StrictMode>
      <Header 
        onSearch={setCity} 
        onLocation={fetchWeatherByLocation}
      />
             
      {loading && <p style={{ textAlign: "center" }}>Cargando...</p>}
      {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}

      {!loading && !error && current && (
        <>
          <Current data={current} />
          <Forecast data={forecast} />
          <Highlights data={highlights} />
          <HourlyForecast data={hourly} />
        </>
      )}
    </StrictMode>
  );
}
