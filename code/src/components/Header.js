import React from "react";
import moment from 'moment';

import "../css/header.css";

export const Header = () => {
  const todaysDate = moment().format("YYYY-MM-DD")
  return (
    <header>
      <h1>Todo</h1>
      <p className="todays-date">{todaysDate}</p>
    </header>
  );
};
