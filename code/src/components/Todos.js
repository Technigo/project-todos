import React from 'react'
import TaskAdder from './TaskAdder';
import TaskList from './TaskList';

const Todos = () => {
  return (
    <>
      <TaskAdder />
      <TaskList />
    </>
  );
}

export default Todos;