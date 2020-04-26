import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import styled from "styled-components";
import { Button } from 'elements/Buttons';

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
      <Button
        type="submit"
        aria-label="Add task"
        large >
        +
      </Button>
    </Form >
  )
}


const Form = styled.form`
  margin: 30px 0 30px 0;
  display: flex;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin: 0 10px 0 0;
  padding: 10px;
  width: 200px;
  height: 40px;
  font-size: 16px;
  box-sizing: border-box;
  transition: 0.1s;

  &:hover {
    border: 1px solid #000;
    outline: none;
  }
  &:focus {
    border: 1px solid #000;
    box-shadow: 0 0 2px 2px #bbb;
  }
  &:focus ~ button {
    border: 1px solid #000;
    outline: none;
    color: #000;
  }
  &::placeholder {
    color: #ccc;
  }
`;