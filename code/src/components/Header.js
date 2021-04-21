import React from 'react';
import moment from 'moment';

const Header = () => {
const date = moment().format ("MMMM Do")

  return (
    <div className="header">
        <h1>Todo's</h1>
        <p>{date}</p>
    </div>
  )
};


export default Header;