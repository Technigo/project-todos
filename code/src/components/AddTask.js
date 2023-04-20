import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import tasks from 'reducers/tasks'
import uniqid from 'uniqid'

const AddTask = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')
  const onAddTaskFormSubmit = (event) => {
    // prevent reset of form
    event.preventDefault()
    // creating new task, id now, inputvalue uppercase
    const newTask = {
      // generate an 8 byte unique id based on current time
      id: uniqid.time(),
      name: inputValue,
      isDone: false
    }
    // sending new task to store
    dispatch(tasks.actions.addTask(newTask))
    // clearing input value
    setInputValue('')
  }
  return (
    <section>
      <form onSubmit={onAddTaskFormSubmit}>
        <label htmlFor="addtaskInput">
          Add task!
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            id="addtaskInput"
            type="text"
          />
        </label>
        <button type="submit">Add task</button>
      </form>
    </section>
  )
}

export default AddTask
