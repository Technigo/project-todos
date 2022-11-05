import React from 'react';

const Weather = () => {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=7899d890f36cbd5ef29eba2a205b5409')
    .then((response) => {
      return response.json() // This always looks like this.
    })
    .then((json) => {
      console.log(json.main.temp);
      console.log(json.name);
    })
  const weatherinfo = (json) => {
    // Function which counts and returns the number of "done" items.
    const city = (json.name);
    return city
  }

  return (

    <p>{weatherinfo}</p>
  )
}

export default Weather

