import React from 'react';

fetch('https://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=7899d890f36cbd5ef29eba2a205b5409')
  .then((response) => {
    return response.json() // This always looks like this.
  })
  .then((json) => {
    console.log(json.main.temp);
    console.log(json.name);
  })

const Weather = () => {
  return (
    <div>
      <p>{}</p>
    </div>)
}

export default Weather

