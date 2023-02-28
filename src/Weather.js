import React, { useState } from "react";

const Weather = () => {
  const [details, setDetails] = useState(null);

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
          <div className='loader'></div>
        </div>
      </div>
    </>
  );
};

export default Weather;
