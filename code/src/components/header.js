/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
// import TitleImage from './brushstroke.svg';

const Header = () => {
  const weekday = new Date().toLocaleString('en-US', {
    weekday: 'long'
  });

  //   const month = new Date().toLocaleString('en-US', { month: 'long' });

  return (
    <div>
      <div className="title-container">
        <h1 className="title">TO DO LIST</h1>
      </div>

      <p className="date">
        <span>Date:</span> {weekday}
      </p>
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
