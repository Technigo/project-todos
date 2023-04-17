/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useSelector } from 'react-redux';

export const AddTasks = () => {
  const listItems = useSelector((store) => store.addTasks.tasks)
  // TODO - fetch tasks from the store

  return (
    <div>
      <button type="button" onClick={() => setNewTask(true)} />
    </div>
  )
}