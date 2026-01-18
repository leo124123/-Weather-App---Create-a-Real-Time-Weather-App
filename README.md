

🌦️ Weather App — React + Vite

Aplicación web de clima desarrollada con React + Vite, que consume la OpenWeather API para mostrar información meteorológica en tiempo real.

Incluye:

Clima actual

Pronóstico de 5 días

Pronóstico por horas

Highlights del día

Buscador de ciudades con autocompletado tipo Google

🚀 Características

🔍 Búsqueda de ciudades con autocompletado

🌡️ Temperatura actual y condición climática

📅 Fecha, ciudad y país

📆 Pronóstico de 5 días

⏰ Pronóstico por horas

💨 Velocidad del viento

💧 Humedad, presión, visibilidad y sensación térmica

🌅 Hora de amanecer y atardecer

⚡ Interfaz moderna, animaciones y diseño responsivo

🔗 Datos en tiempo real desde OpenWeather API

🛠️ Tecnologías

React 18

Vite

JavaScript (ES6+)

OpenWeather API

CSS puro

Lucide Icons

📂 Estructura del proyecto
Weather/
│
├── public/
│
├── src/
│   ├── assets/          # Imágenes e íconos
│   │
│   ├── components/
│   │   ├── Style/       # Archivos CSS por componente
│   │   │   ├── header.css
│   │   │   ├── currentWeather.css
│   │   │   ├── forecast.css
│   │   │   ├── highlights.css
│   │   │   └── hourlyForecast.css
│   │   │
│   │   ├── Header.jsx
│   │   ├── CurrentWeather.jsx
│   │   ├── Forecast.jsx
│   │   ├── Highlights.jsx
│   │   └── HourlyForecast.jsx
│   │
│   ├── App.jsx          # Estado global y lógica de la API
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md

⚙️ Instalación
git clone https://github.com/tu-usuario/weather-app.git
cd weather-app
npm install
npm run dev

🔑 API

Este proyecto usa la OpenWeather API.

Debes colocar tu API key en el proyecto:

const API_KEY = "TU_API_KEY"


Puedes crear una gratis en:
https://openweathermap.org/api

📌 Estado del proyecto

Versión inicial funcional:

Autocompletado de ciudades

Datos reales en tiempo real

Arquitectura limpia por componentes

👨‍💻 Autor

Desarrollado por: Leo
Proyecto personal de práctica y portafolio.