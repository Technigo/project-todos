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
      <Input
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
        +
      </button>
    </Form >
  )
}


const Form = styled.form`
  margin: 30px 0 30px 0;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-right: 10px;
  padding: 10px;
  width: 200px;
  height: 40px;
  font-size: 16px;
  box-sizing: border-box;
  &:focus {
    border: 1px solid #000;
    box-shadow: 0 0 2px 2px #bbb;
    outline: none;
  }
  &::placeholder {
    color: #ccc;
  }
`;