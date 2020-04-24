import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'

export const AddTask = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState("");

  const handleOnSubmit = event => {
    event.preventDefault();

    dispatch(
      tasks.actions.addTask({
        text: inputValue,
        complete: false
      })
    );
    // Reset value
    setInputValue("");
  }



  return (
    <form
      className="task-input"
      onSubmit={handleOnSubmit}>
      <input
        type="text"
        onChange={event => setInputValue(event.target.value)}
        value={inputValue}
        className="task-input-text"
      ></input>
      <button
        type="submit">
        Add task
    </button>
      <button type="button" onClick={() => {
        dispatch(
          tasks.actions.removeAllTasks())
      }}>Remove All</button>
      <button type="button" onClick={() => {
        dispatch(
          tasks.actions.hideTasks("un-complete"))
      }}>Filter</button>
    </form >
  )
}
