import React from 'react';
import { Paragraph } from 'library/Text';
//import Moment from 'react-moment';

const TodaysDate = () => {
  const dateToday = new Date();
  const date = dateToday.toLocaleDateString('en-SE', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return <Paragraph>{date}</Paragraph>;
};
export default TodaysDate;
