import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import uniqid from 'uniqid';

// WHAT I WANT TO DO HERE:
// Add an input field for new tasks /DONE
// Add a button to the right of that field for submitting the task. /DONE
// On submitting, the form should push a new task object to the tasks array.
// The task object should contain an ID, name and isChecked value.
// On submitting, the task should be assigned a unique ID using uniqid.

// HEADER
// COUNTER
// TASKFORM
// TASKLIST

export const AddTaskForm = () => {
  const [NewTask, setNewTask] = useState('')
  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
    event.preventDefault()
    const addNewTask = {
      id: uniqid(),
      name: NewTask,
      isCompleted: false
    }
    dispatch(tasks.actions.addTask(addNewTask))

    setNewTask('')
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Add new task here..."
          value={NewTask}
          onChange={(event) => setNewTask(event.target.value)} />
        <button
          type="submit"
          disabled={NewTask === ''}>
                  Add!
        </button>
      </form>
    </div>
  )
}