import React from "react";
import "./Style/forecast.css";

export default function Forecast({ data }) {
  return (
    <aside className="forecast">
      <h2 className="forecast-title">5 Days Forecast</h2>

      <ul className="days">
        {data.map((day, i) => (
          <li className="day-card" key={i}>
            <div className="day-left">
              <img 
                src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`} 
                alt="weather" 
                className="weather-icon" 
              />
              <span className="temp">{day.temp}°</span>
            </div>

            <span className="date">
              {day.date.toLocaleDateString("es-ES", { day:"numeric", month:"short" })}
            </span>

            <span className="day">
              {day.date.toLocaleDateString("es-ES", { weekday:"long" })}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}