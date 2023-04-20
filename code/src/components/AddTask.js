import React, { useState } from 'react'
// import styled from 'styled-components'
// import GlobalStyle from 'styles/GlobalStyle'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'

const AddTask = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now().toString(),
      name: inputValue.toUpperCase(),
      isComplete: false
    };
    dispatch(tasks.actions.addTask(newTask));
    setInputValue('');
  }
  return (
    <>
      {/* <GlobalStyle /> */}
      <section>
        <form onSubmit={onFormSubmit}>
          <label htmlFor="addTaskInput">
            Add your next task:
            <input
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              id="addTaskInput" />
          </label>
          <button type="submit">Add Now!</button>
        </form>
      </section>
    </>

  )
}

export default AddTask

