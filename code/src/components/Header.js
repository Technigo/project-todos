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
      <div className="dateContainer">
        <p>{weekday} {day} {month}</p>
      </div>
      <Title>TO-DO LIST</Title>
    </div>
  );
};

export default Header;