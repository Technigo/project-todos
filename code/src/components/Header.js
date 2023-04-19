import React from 'react';
import { useSelector } from 'react-redux';

export const Header = () => {
  const totalTask = useSelector((store) => store.tasks.items.length)
  return (
    <header>
      <h1>To do list!</h1>
      <p>Total tasks: {totalTask}</p>
    </header>
  )
}