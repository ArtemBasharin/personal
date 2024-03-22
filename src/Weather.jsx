import React, { useState } from "react";
import axios from "axios";
// import { useEffect } from "react";

function Weather() {
  const apiLocationKey = "a9e48c70-8b22-11ed-8d13-bd165d1291e3";
  const apiWeatherKey = "d21939b2a613cb8cf21acd6afd167bf5";
  // const [weatherUrl, setWeatherUrl] = useState("");
  const [isWeatherLoading, setIsWeatherLoading] = useState(true);

  axios.get(`https://geolocation-db.com/json/${apiLocationKey}`).then((res) => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${res.data.latitude}&lon=${res.data.longitude}&appid=${apiWeatherKey}`;
    console.log(weatherUrl);

    axios.get(weatherUrl).then((res) => {
      console.log(res.data);
      document.querySelector(".temperature").innerHTML =
        Math.trunc(res.data.main.temp) - 273;
      document.querySelector(".humidity").innerHTML = res.data.main.humidity;
      document.querySelector(".wind").innerHTML = res.data.wind.speed;
      document.querySelector(
        ".weather_icon"
      ).src = `https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`;
      setIsWeatherLoading(false);
    });
  });

  // useEffect(() => {
  //   fetch(`https://geolocation-db.com/json/${apiLocationKey}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${data.latitude}&lon=${data.longitude}&appid=${apiWeatherKey}`;
  //       console.log(weatherUrl);

  //       axios.get(weatherUrl).then((res) => {
  //         console.log(typeof res.data.main.temp);

  //         document.querySelector(".temperature").innerHTML =
  //           Math.trunc(res.data.main.temp) - 273;
  //         document.querySelector(".humidity").innerHTML =
  //           res.data.main.humidity;
  //         document.querySelector(".wind").innerHTML = res.data.wind.speed;
  //         document.querySelector(
  //           ".weather_icon"
  //         ).src = `https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`;
  //         setIsWeatherLoading(false);
  //       });
  //     });
  // }, []);

  return (
    <>
      <div className={`loader ${isWeatherLoading && "loader_visible"}`}></div>
      <div className={`weather ${isWeatherLoading && "weather_hidden"}`}>
        <div className='weather_description'>
          <p>
            Temp: <span className='inner_text temperature'></span>°C
          </p>
          <p>
            Humidity: <span className='inner_text humidity'></span>%
          </p>
          <p>
            Wind speed: <span className='inner_text wind'></span> m/s
          </p>
        </div>
        <img className='weather_icon' src='' alt='weather icon' />
      </div>
    </>
  );
}

export default Weather;
