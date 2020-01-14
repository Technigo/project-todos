import React, { useState, useEffect } from 'react';
import './Header.css';

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
        <h4>{`${dateTime.toLocaleDateString()}`}</h4>
      </div>
    </header>
  );
};
