import React, { useState, useEffect } from 'react';
import './Header.css';

export const Header = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const month = [
    'Sunday',
    'Monday',
    'Tuseday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date()), 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <header>
      <div>
        <h1>TO DO</h1>
        <h4>{`${month[dateTime.getDay()]}`}</h4>
      </div>
    </header>
  );
};
