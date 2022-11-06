/* eslint-disable linebreak-style */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React from 'react';
import { useSelector } from 'react-redux';

export const TodoCounter = () => {
  const todoDone = useSelector((store) => store.tasks.items.filter((item) => item.taskDone).length);
  const todoNotDone = useSelector((store) => store.tasks.items.filter((item) => !item.taskDone).length);

  return (
    <div className="counter-container">
      <p>You have done {todoDone} tasks! 🤩, now there's only {todoNotDone} left 💪🏻</p>
    </div>
  )
}