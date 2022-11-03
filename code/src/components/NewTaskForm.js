/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';

export const NewTaskForm = () => {
  // eslint-disable-next-line no-unused-vars
  const [newTaskItem, setNewTaskItem] = useState('')
  const dispatch = useDispatch()

  // adding new task using dispatch
  const newTask = () => {
    return (
      dispatch(tasks.actions.addTask({
        text: newTaskItem,
        complete: false,
        id: Date.now()
        // creating a unique number by using date:
        // made up of the four digit year, two digit month,
        // two digit day, two digit hour, two digit minute, two digit second,
        // and three digit millisecond +
        // a random number from Math.random() if we need a huge data base
      }))
    )
  };
  return (
    <form>
      <input type="text" placeholder="write here your task" onChange={(e) => setNewTaskItem(e.target.value)} />
      <button type="button" onClick={newTask}>Add task</button>
    </form>
  )
}