import React from "react";
import "./Style/currentWeather.css"
import { Calendar, MapPin } from 'lucide-react';

export default function CurrentWeather({ data }) {

  return ( 
    <aside className="current"> 
      <div className="expect"> 
        <h2 className="now">Now</h2>
      </div>

      <div className="temperature-card"> 
        <div className="temp-container">
          <h1 className="temp">{data.temp}°C</h1>
          <img 
            src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`} 
            alt="Weather Icon" 
            className="icon"
          />
        </div>

        <p className="condition">{data.description}</p>
        <hr className="hr"/>

        <div className="details"> 
          <p className="date">
            <Calendar style={{ color: '#DDDAE5' }} size={16} />
            {data.date.toLocaleDateString("es-ES", { weekday:"long", day:"numeric", month:"short" })}
          </p>

          <p className="location">
            <MapPin style={{ color: '#DDDAE5' }} size={16} />
            {data.city},{data.country}
          </p>
        </div>
      </div>
    </aside>
  )
}