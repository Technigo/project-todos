/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React from 'react';
import { useSelector } from 'react-redux';

export const TodoCounter = () => {
  const todoDone = useSelector((store) => store.tasks.items.filter((item) => item.taskDone).length);
  const todoNotDone = useSelector((store) => store.tasks.items.filter((item) => !item.taskDone).length);
  console.log(todoDone)
  console.log(todoNotDone)

  return (
    <p>{todoDone} {todoNotDone} </p>
  )
}