import React from 'react';

import { SubTitle } from '../lib/Text';

const TodayDate = () => {
  const dateToday = new Date();
  const date = dateToday.toLocaleDateString('en-SE', {weekday: 'long', month: 'long', day: 'numeric'});

  return <SubTitle>{date}</SubTitle>
};
export default TodayDate;