import React from 'react';
import { useSelector } from 'react-redux';
// import styled from 'styled-components'

const Header = () => {
  const counter = useSelector((store) => store.todos.items);
  const uncompletedToDo = counter.length;
  const completedToDo = counter.filter((item) => item.isComplete).length;

  return (
    <header>
      <h1>My To Do List</h1>
      <p>
        {completedToDo} of {uncompletedToDo} tasks done
      </p>
    </header>
  );
};

export default Header;
