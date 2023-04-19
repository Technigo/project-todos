import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import pokemons from 'reducers/pokemon';
import tasks from 'reducers/tasks';

const AddTask = () => {
  // const [inputValue, setInputValue] = useState('')
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
    <section className="top-container">
      <header>
        <h1 className="header-h1">My to-do list</h1>
      </header>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addTaskInput">
          <p className="add-task-label">Add new task:</p>
          <input value={newTaskInput} onChange={(event) => setNewTaskInput(event.target.value)} id="addTaskInput" type="text" />
        </label>
        <button className="add-button" type="submit" disabled={newTaskInput.length < 5 || newTaskInput.length > 50}>ADD</button>
      </form>
    </section>
  )
}

export default AddTask;