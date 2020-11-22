import React from 'react';
//import Moment from 'react-moment';

const TodaysDate = () => {
  const dateToday = new Date();
  const date = dateToday.toLocaleDateString('en-SE', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return <p>{date}</p>;
};
export default TodaysDate;
