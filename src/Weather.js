import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [details, setDetails] = useState(null);
  let url = "";
  let yourCity = "";

  const getUserGeolocationDetails = () =>
    fetch(
      "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
    )
      .then((response) => response.json())
      .then((data) => setDetails(data));

  console.log(details);

  if (details === null) {
    getUserGeolocationDetails();
  }

  function DateToday() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    const formattedToday = dd + "/" + mm + "/" + yyyy;
    return formattedToday;
  }

  let apiKey = "7493d26b3364019d03bf7779cd787ca0";
  // Город погода которого нужна
  // Формируем url для GET запроса

  if (details.city !== null) {
    yourCity = details.city;
    url = `http://api.openweathermap.org/data/2.5/weather?q=${details.city}&lang=ru&units=metric&appid=${apiKey}`;
  }

  axios.get(url).then((res) => {
    // Вывод температуры
    document.querySelector(".temp").innerHTML = res.data.main.temp;
    // Вывод влажности
    document.querySelector(".humidity").innerHTML = res.data.main.humidity;
    // Вывод скорости ветра
    document.querySelector(".wind").innerHTML = res.data.wind.speed;
  });

  return (
    <>
      <div className='block'>
        <h2 className='titular titular_weather'>
          WEATHER IN {details !== null ? details.city.toUpperCase() : details}
          <p className='titular_location'></p>
        </h2>
        <div className='block_flex'>
          <p className='current-day-date'>Today is {DateToday()}</p>
          <p className='current-day-date'>
            {details && (
              <ul className='list-group'>
                <li className='list-group-item'>
                  {`${details.city}, ${details.country_name}(${details.country_code})`}
                </li>
                <li className='list-group-item'>IP: {details.IPv4}</li>
              </ul>
            )}
          </p>
          <div class='weather'>
            <p>
              Temp: <span class='temp'></span>°C
            </p>
            <p>
              Humidity: <span class='humidity'></span>%
            </p>
            <p>
              Wind speed: <span class='wind'></span> км/ч
            </p>
          </div>
          <div className='loader'></div>
        </div>
      </div>
    </>
  );
};

export default Weather;
