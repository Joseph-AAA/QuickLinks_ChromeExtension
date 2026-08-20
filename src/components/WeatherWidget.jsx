import { useEffect, useState } from "react";


function WeatherWidget(){
const weatherIcon = {
  day: {
    0: "☀️",   // Clear sky
    1: "🌤️",   // Mainly clear
    2: "⛅",   // Partly cloudy
    3: "☁️",   // Overcast

    45: "🌫️",  // Fog
    48: "🌫️",  // Depositing rime fog

    51: "🌦️",  // Light drizzle
    53: "🌦️",  // Moderate drizzle
    55: "🌧️",  // Dense drizzle
    56: "🌧️",  // Light freezing drizzle
    57: "🌧️",  // Dense freezing drizzle

    61: "🌦️",  // Slight rain
    63: "🌧️",  // Moderate rain
    65: "🌧️",  // Heavy rain
    66: "🌧️",  // Light freezing rain
    67: "🌧️",  // Heavy freezing rain

    71: "🌨️",  // Slight snow
    73: "🌨️",  // Moderate snow
    75: "❄️",   // Heavy snow
    77: "🌨️",  // Snow grains

    80: "🌦️",  // Slight rain showers
    81: "🌧️",  // Moderate rain showers
    82: "⛈️",  // Violent rain showers

    85: "🌨️",  // Slight snow showers
    86: "❄️",   // Heavy snow showers

    95: "⛈️",  // Thunderstorm
    96: "⛈️",  // Thunderstorm + slight hail
    99: "⛈️"   // Thunderstorm + heavy hail
  },

  night: {
    0: "🌙",   // Clear sky
    1: "🌙",   // Mainly clear
    2: "☁️",   // Partly cloudy
    3: "☁️",   // Overcast

    45: "🌫️",  // Fog
    48: "🌫️",  // Depositing rime fog

    51: "🌧️",  // Light drizzle
    53: "🌧️",  // Moderate drizzle
    55: "🌧️",  // Dense drizzle
    56: "🌧️",  // Light freezing drizzle
    57: "🌧️",  // Dense freezing drizzle

    61: "🌧️",  // Slight rain
    63: "🌧️",  // Moderate rain
    65: "🌧️",  // Heavy rain
    66: "🌧️",  // Light freezing rain
    67: "🌧️",  // Heavy freezing rain

    71: "🌨️",  // Slight snow
    73: "🌨️",  // Moderate snow
    75: "❄️",   // Heavy snow
    77: "🌨️",  // Snow grains

    80: "🌧️",  // Slight rain showers
    81: "🌧️",  // Moderate rain showers
    82: "⛈️",  // Violent rain showers

    85: "🌨️",  // Slight snow showers
    86: "❄️",   // Heavy snow showers

    95: "⛈️",  // Thunderstorm
    96: "⛈️",  // Thunderstorm + slight hail
    99: "⛈️"   // Thunderstorm + heavy hail
  }
};
    const [weather , setWeather]= useState(null);
    useEffect(()=>{
        
             const fetchWeather = async()=>{
                 const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=2.5&longitude=112.5&current=temperature_2m,weather_code,is_day&timezone=Asia%2FSingapore")
                 const data = await response.json();
                 console.log(data);
                //  console.log(data.current.temperature_2m)
                 setWeather(data.current)
           }
           fetchWeather();    
        },[])
            
        


    return(
        <div className="text-sm gap-2 bg-amber-50 w-40 h-8 
                        shadow-[0_4px_10px_rgba(0,0,0,1)]
                        flex items-center justify-center rounded-4xl ">
                <span>{weatherIcon[weather?.is_day ? "day" : "night"]?.[weather?.weather_code]}</span>
         
                <span>{weather?.temperature_2m}°C</span>
                <span className="">Malaysia</span>
        </div>
    )
}
export default WeatherWidget;