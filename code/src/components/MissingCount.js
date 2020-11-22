import React from 'react';
import { useSelector } from 'react-redux';

// Component showing the amount of tasks missing to be completed. It accesses the
// global state and gets the complete current to do list, then filters out the
// tasks in that list with property complete: false, and returns the length of that array
export const MissingCount = () => {
  const toDoList = useSelector((state) => state.todolist.items);
  const missing = toDoList.filter(x => x.complete === false);
  const missingCount = missing.length;

  return (
    <h3>{`You are missing: ${missingCount} tasks`}</h3>
  )
};
