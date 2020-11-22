import React from 'react';

import { Paragraph } from '../lib/Text';


const TodayDate = () => {
  const dateToday = new Date();
  const date = dateToday.toLocaleDateString('en-SE', {weekday: 'long', month: 'long', day: 'numeric'});

  return <Paragraph>{date}</Paragraph>    

}
export default TodayDate