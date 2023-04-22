import React from 'react';
import { Title } from './HeaderStyled';

const Header = () => {
  const currentDate = new Date();

  const day = currentDate.getDate();
  const weekday = currentDate.toLocaleString('en-US', {
    weekday: 'long'
  });

  const month = currentDate.toLocaleString('en-US', { month: 'long' });

  return (
    <div>
      <Title>TO-DO LIST</Title>
      <div className="dateContainer">
        <p>{weekday} {day} {month}</p>
      </div>
    </div>
  );
};

export default Header;