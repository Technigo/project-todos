import React from 'react'
import styled from 'styled-components';

const Greeting = () => {
  let timeOfDay;
  const date = new Date();
  const hours = date.getHours();

  if (hours < 10) {
    timeOfDay = 'morning';
  } else if (hours >= 11 && hours < 17) {
    timeOfDay = 'afternoon';
  } else {
    timeOfDay = 'evening';
  }

  return (
    <Welcome>&quot;Good {timeOfDay},</Welcome>
  )
}
export default Greeting

const Welcome = styled.p`
  text-align: center;
  margin-top: 80px;
  margin-right: 90px;
  color: var(--quinary);
  font-style: italic;
  font-size: 22px;
  text-decoration: underline;

@media (min-width: 600px) and (max-width: 900px){
  margin-right: 90px;
  font-size: 30px;
}

@media (min-width: 901px){
  margin: 200px 150px 10px 0;
  font-size: 40px;
}
`