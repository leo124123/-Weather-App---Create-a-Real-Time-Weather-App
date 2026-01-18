import React from "react";
import "./Style/highlights.css";

import {
  Wind,
  Droplets,
  Waves,
  Sunrise,
  Sunset,
  Eye,
  Thermometer
} from "lucide-react";

export default function Highlights({ data }) {
  return (
    <section className="highlights">
      <h2 className="highlights-title">Today’s Highlights</h2>

      <div className="highlights-wrapper">

        {/* LEFT */}
        <div>
          <div className="card">
            <div className="card-header">
              <span>Wind Status</span>
              <span className="status good">{data.wind} m/s</span>
            </div>

            <div className="air-content">
              <div className="icon-box">
                <Wind size={28} />
              </div>

              <div className="air-values">
                <div>
                  <small>Humidity</small>
                  <strong>{data.humidity}%</strong>
                </div>
                <div>
                  <small>Pressure</small>
                  <strong>{data.pressure} hPa</strong>
                </div>
                <div>
                  <small>Feels like</small>
                  <strong>{data.feels}°C</strong>
                </div>
                <div>
                  <small>Visibility</small>
                  <strong>{(data.visibility / 1000).toFixed(1)} km</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="small-grid">
            <div className="card small">
              <div className="icon-inline">
                <Droplets size={18} />
              </div>
              <span>Humidity</span>
              <strong>{data.humidity}%</strong>
            </div>

            <div className="card small">
              <div className="icon-inline">
                <Waves size={18} />
              </div>
              <span>Pressure</span>
              <strong>{data.pressure} hPa</strong>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="card">
            <span className="card-title">Sunrise & Sunset</span>

            <div className="sun-times">
              <div>
                <div className="icon-inline">
                  <Sunrise size={18} />
                </div>
                <span className="sun-label">Sunrise:</span>
                <strong className="strong">
                  {data.sunrise.toLocaleTimeString()}
                </strong>
              </div>

              <div>
                <div className="icon-inline">
                  <Sunset size={18} />
                </div>
                <span className="sun-label">Sunset:</span>
                <strong className="strong">
                  {data.sunset.toLocaleTimeString()}
                </strong>
              </div>
            </div>
          </div>

          <div className="small-grid">
            <div className="card small">
              <div className="icon-inline">
                <Eye size={18} />
              </div>
              <span>Visibility</span>
              <strong>{(data.visibility / 1000).toFixed(1)} km</strong>
            </div>

            <div className="card small">
              <div className="icon-inline">
                <Thermometer size={18} />
              </div>
              <span>Feels Like</span>
              <strong>{data.feels}°C</strong>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}