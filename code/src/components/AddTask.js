// import styled from 'styled-components';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import todos from 'reducers/todos';
import uniqid from 'uniqid';

const AddTask = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('');

  // Adds new task to TaskList when submitting form
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(todos.actions.addTask({ // from reducer
      id: uniqid(),
      text: input,
      isDone: false
    }))
    setInput('') // clears textfield after submitting task
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <input
          type="text"
          placeholder="add task"
          value={input}
          onChange={(event) => setInput(event.target.value)} />
        <button
          type="submit">
            add task
        </button>
      </div>
    </form>
  )
}

export default AddTask;