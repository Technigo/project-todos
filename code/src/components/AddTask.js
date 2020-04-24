import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import styled from "styled-components";


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
    <Form
      className="task-input"
      onSubmit={handleOnSubmit}>
      <input
        type="text"
        onChange={event => setInputValue(event.target.value)}
        value={inputValue}
        className="task-input-text"
        placeholder="Add task"
        aria-label="Type task here"
        required
      />
      <button
        type="submit"
        aria-label="Add task">
        Add task
      </button>
    </Form >
  )
}


const Form = styled.form`
  margin: 20px 0;
`;