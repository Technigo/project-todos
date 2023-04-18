import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const todoList = useSelector((store) => store.tasks.items);
  console.log('todoList', todoList)
  console.log('todoList.length', todoList.length)
  return (
    <div className="Header">
      <h1>Matildas todos!</h1>
      <p>{todoList.length} in the list currently</p>
      <p>x tasks are still not done</p>
    </div>
  );
}

export default Header;