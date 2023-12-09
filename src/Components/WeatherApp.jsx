import './WeatherApp.css';
import React from 'react';


export const WeatherApp = () => {
    let api_key = "24047da379c7b6ef7a6711530b11db34";

    const search = async ()=>{
        const element = document.getElementsByClassName("cityInput");
        if(element[0].value===""){
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temperature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity+ "%";
        wind[0].innerHTML = data.wind.speed + "m/h";
        temperature[0].innerHTML = data.main.temp+ "ºC";
        location[0].innerHTML = data.name;


    }

    

  return (
    <div className='container'>
         <div className="top-bar">
            <input type="text" className="cityInput"  placeholder='Search'/>
            <div className="search-icon"><i className="fa-solid fa-magnifying-glass"  onClick={()=>{search()}}  /></div>
         </div>
         <div className="weather-icon"><i className="fa-sharp fa-solid fa-cloud-sun" id='cloud'/></div>
         <div className="weather-temp">24ºc</div>
         <div className="weather-location">London</div>
         <div className="data-container">
            
            <div className="element">
            <i className="fa-solid fa-water"></i>

                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>

            <div className="element">
            <i className="fa-solid fa-wind"></i>
                <div className="data">
                    <div className="wind-rate">18m/h</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
         </div>
    </div>
  )
}
