export const API_KEY = "5e2a3a5b8d204a3e8b5c2d1f0a9e6c3b";

export async function getWeatherByCity(city) {
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=yes&lang=es`
    );

    if (!res.ok) throw new Error("Ciudad no encontrada");

    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
