import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';

const AddTask = () => {
  const [newTaskInput, setNewTaskInput] = useState('')
  const dispatch = useDispatch()
  const onFormSubmit = (event) => {
    event.preventDefault()
    const newTask = {
      id: Date.now().toString(),
      description: newTaskInput.charAt(0).toUpperCase() + newTaskInput.slice(1),
      isCompleted: false
    }
    dispatch(tasks.actions.addTask(newTask))
    setNewTaskInput('')
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label className="add-task-label" htmlFor="addTaskInput">
        <input placeholder="Add new task here..." value={newTaskInput} onChange={(event) => setNewTaskInput(event.target.value)} id="addTaskInput" type="text" />
        <button className="add-button" type="submit" disabled={newTaskInput.length < 5 || newTaskInput.length > 50}>ADD</button>
      </label>
    </form>
  )
}

// The htmlFor on the label needs to be the same as the input id

export default AddTask;