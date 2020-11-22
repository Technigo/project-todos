import React from 'react';
import { useSelector } from 'react-redux';

export const MissingCount = () => {
  const toDoList = useSelector((state) => state.todolist.items);
  const missing = toDoList.filter(x => x.complete === false);
  const missingCount = missing.length;

  return (
    <h3>{`You are missing: ${missingCount} tasks`}</h3>
  )
};
