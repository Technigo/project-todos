import React from 'react';

const Header = () => {
  const weekday = new Date().toLocaleString('en-US', {
    weekday: 'long'
  });

  //   const month = new Date().toLocaleString('en-US', { month: 'long' });

  return (
    <div>
      <div className="title-container">
        {/* <img className="brush" src="./brushstroke.svg" alt="brush-stroke" /> */}
        <h1 className="title">TO DO LIST</h1>
      </div>

      <p className="date">
        <span>Date:</span> {weekday}
      </p>
    </div>
  );
};

export default Header;
