import { useEffect, useState } from "react";


function WeatherWidget(){

    const [temperature , setTemperature]= useState(null);
    useEffect(()=>{
        
             const fetchWeather = async()=>{
                 const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=2.5&longitude=112.5&current=temperature_2m&timezone=Asia%2FSingapore")
                 const data = await response.json();
                 console.log(data);
                 console.log(data.current.temperature_2m)
                 setTemperature(data.current.temperature_2m)
           }
           fetchWeather();    
        })
            
        


    return(
        <div className="text-sm gap-2 bg-amber-50 w-40 h-8 
                        shadow-[0_4px_10px_rgba(0,0,0,1)]
                        flex items-center justify-center rounded-4xl ">
                <span>⛅</span>
                <span>{temperature}°C</span>
                <span className="">Malaysia</span>
        </div>
    )
}
export default WeatherWidget;