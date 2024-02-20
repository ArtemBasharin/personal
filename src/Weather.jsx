import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function Weather() {
  const apiLocationKey = "a9e48c70-8b22-11ed-8d13-bd165d1291e3";
  const apiWeatherKey = "d21939b2a613cb8cf21acd6afd167bf5";
  // const [details, setDetails] = useState(null);
  const [weatherUrl, setWeatherUrl] = useState("");
  const [isWeatherLoading, setIsWeatherLoading] = useState(true);

  // const [weatherIconCode, setWeatherIconCode] = useState("");

  // const getUserGeolocationDetails = () =>
  //   fetch(`https://geolocation-db.com/json/${apiLocationKey}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setDetails(data);
  //       setWeatherUrl(
  //         `https://api.openweathermap.org/data/2.5/weather?lat=${details.latitude}&lon=${details.longitude}&appid=${apiWeatherKey}`
  //       );
  //     });
  // getUserGeolocationDetails();

  useEffect(() => {
    fetch(`https://geolocation-db.com/json/${apiLocationKey}`)
      .then((response) => response.json())
      .then((data) => {
        setWeatherUrl(
          `https://api.openweathermap.org/data/2.5/weather?lat=${data.latitude}&lon=${data.longitude}&appid=${apiWeatherKey}`
        );
        console.log(weatherUrl);
      });
  }, []);

  // console.log(details);

  // function DateToday() {
  //   const today = new Date();
  //   const yyyy = today.getFullYear();
  //   let mm = today.getMonth() + 1; // Months start at 0!
  //   let dd = today.getDate();
  //   if (dd < 10) dd = "0" + dd;
  //   if (mm < 10) mm = "0" + mm;
  //   const formattedToday = dd + "/" + mm + "/" + yyyy;
  //   return formattedToday;
  // }

  // Город погода которого нужна
  // Формируем url для GET запроса

  // if (details !== null) {
  //   setWeatherUrl(
  //     `https://api.openweathermap.org/data/2.5/weather?lat=${details.latitude}&lon=${details.longitude}&appid=${apiKey}`
  //   );
  // }

  useEffect(() => {
    axios.get(weatherUrl).then((res) => {
      // Вывод температуры
      document.querySelector(".temp").innerHTML =
        Math.trunc(res.data.main.temp) - 273;
      // Вывод влажности
      document.querySelector(".humidity").innerHTML = res.data.main.humidity;
      // Вывод скорости ветра
      document.querySelector(".wind").innerHTML = res.data.wind.speed;
      document.querySelector(
        ".weather_icon"
      ).src = `https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`;
      setIsWeatherLoading(false);
    });
  }, [weatherUrl]);

  // const getWeatherData = () => {
  //   axios.get(weatherUrl).then((res) => {
  //     // Вывод температуры
  //     document.querySelector(".temp").innerHTML = res.data.main.temp;
  //     // Вывод влажности
  //     document.querySelector(".humidity").innerHTML = res.data.main.humidity;
  //     // Вывод скорости ветра
  //     document.querySelector(".wind").innerHTML = res.data.wind.speed;
  //   });
  // };

  return (
    <>
      <div className={`loader ${isWeatherLoading && "loader_visible"}`}></div>
      <div className={`weather ${isWeatherLoading && "weather_hidden"}`}>
        <div className='weather_description'>
          <p>
            Temp: <span className='inner_text temp'></span>°C
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
