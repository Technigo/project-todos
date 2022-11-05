import React from 'react';
import moment from 'moment';

const Header = () => {
  const date = new Date();

  return (
    <header>
      <h1>My To-Do List</h1>
      <p>{moment(date).format('dddd / MM / YYYY')}</p>
    </header>
  );
};

export default Header;
