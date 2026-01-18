🌦️ Weather App — Real Time Weather Application

Aplicación web de clima desarrollada con React + Vite que consume la OpenWeather API para mostrar información meteorológica en tiempo real, incluyendo clima actual, pronóstico por horas, pronóstico de 5 días y estadísticas destacadas del día.

Este proyecto fue creado como práctica avanzada de consumo de APIs, manejo de estado y arquitectura de componentes en React, manteniendo un diseño moderno y animado.

✨ Características principales

🔍 Buscador de ciudades con autocompletado tipo Google

🌡️ Temperatura actual en tiempo real

🌤️ Condición climática actual

📍 Ciudad y país

📅 Fecha actual formateada

📆 Pronóstico de 5 días

⏰ Pronóstico por horas del día

💨 Velocidad del viento

💧 Humedad

🌬️ Presión atmosférica

👁️ Visibilidad

🌡️ Sensación térmica

🌅 Hora de amanecer y atardecer

⚡ Interfaz moderna con animaciones

📱 Diseño adaptable

🧠 Objetivo del proyecto

Practicar consumo de APIs reales

Manejo de estado con useState y useEffect

Separación lógica / visual por componentes

Construcción de una app tipo producto real

Preparar un proyecto presentable para portafolio

🛠️ Tecnologías utilizadas

⚛️ React 18

⚡ Vite

🟨 JavaScript (ES6+)

🌍 OpenWeather API

🎨 CSS puro

🎯 Lucide Icons

📂 Estructura del proyecto
Weather/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   ├── img/              # Imágenes generales
│   │   └── weather_icons/    # Íconos del clima
│   │
│   ├── components/
│   │   ├── Style/            # CSS por componente
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
│   ├── App.jsx               # Lógica principal y estado global
│   ├── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md

⚙️ Instalación y uso

Clona el repositorio:

git clone https://github.com/leo124123/-Weather-App---Create-a-Real-Time-Weather-App.git


Entra al proyecto:

cd Weather


Instala dependencias:

npm install


Ejecuta el servidor de desarrollo:

npm run dev

🔑 API

Este proyecto utiliza la OpenWeather API.

Debes crear una cuenta y obtener tu API Key en:

👉 https://openweathermap.org/api

Luego colócala en el proyecto:

const API_KEY = "TU_API_KEY"

📌 Estado del proyecto

✔️ Funcional
✔️ Conectado a API real
✔️ Autocompletado de ciudades
✔️ Arquitectura modular
✔️ Listo para portafolio

Próximas mejoras posibles:

Guardar ciudades favoritas

Geolocalización real

Modo oscuro automático

Convertir en PWA

👨‍💻 Autor

Desarrollado por Leo
Proyecto personal de práctica y portafolio.