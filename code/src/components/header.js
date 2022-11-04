/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';

// import { Title } from 'styledComponents/Title';
// import TitleImage from '/assets/brush.svg';

const Header = () => {
  const currentDate = new Date();

  const day = currentDate.getDate();
  const weekday = currentDate.toLocaleString('en-US', {
    weekday: 'long'
  });

  const month = currentDate.toLocaleString('en-US', { month: 'long' });

  return (
    <div>
      <div className="test-2">
        <p>{weekday}</p>
        <p>{day}</p>
        <p>{month}</p>
      </div>

      <div className="title-container">
        <h1 className="title">TO-DO LIST</h1>
      </div>
    </div>
  );
};

export default Header;

/* <h1
className="title"
style={{
  backgroundImage: `url(${TitleImage})`,
  backgroundSize: 'cover'
}}
> */
