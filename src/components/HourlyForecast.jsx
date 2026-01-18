import React from "react";
import { Cloud, Navigation } from "lucide-react";
import "./Style/hourlyForecast.css";

export default function TodayAt({ data }) {
  return (
    <section className="today">
      <h2 className="today-title">Today at</h2>

      {/* TEMPERATURE */}
      <div className="today-row">
        {data.map((hour, index) => (
          <div className="today-card" key={index}>
            <span className="hour">
              {hour.time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </span>

            <Cloud size={32} />
            <strong>{hour.temp}°</strong>
          </div>
        ))}
      </div>

      {/* WIND */}
      <div className="today-row">
        {data.map((hour, index) => (
          <div className="today-card" key={index}>
            <span className="hour">
              {hour.time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </span>

            <Navigation size={28} />
            <strong>{hour.wind} km/h</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
