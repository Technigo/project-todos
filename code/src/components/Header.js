import React, { useState, useEffect } from 'react';
import './Header.css';
import { Counter } from './Counter';

export const Header = () => {
  const [dateTime, setDateTime] = useState(new Date());

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
        <h4>{`${dateTime.toDateString()}`}</h4>
      </div>
      <div className="counter">
        <Counter />
      </div>
    </header>
  );
};
