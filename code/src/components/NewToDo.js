/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid';
import { tasks } from 'reducers/tasks'
import styled from 'styled-components'

export const TextInput = styled.input`
  background: #FFFFFF;
  border: 2px solid pink;
  outline: none;
  border-radius: 8px;
  height: 48px;
  width: 100%;
  box-sizing: border-box;
  padding: 5px 15px;
  font-size: 18px;

    &:focus {
      outline: none;
      caret-color: #f85f36;
    }

    &:hover {
      border: 2px solid #f85f36;
    }

   @media (max-width: 768px) {
  }
`
export const ToDoForm = styled.form`
  display: flex;
  gap: 10px;
`

export const NewToDo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newToDo = {
      id: uniqid(),
      text: inputValue.charAt(0).toUpperCase() + inputValue.slice(1),
      complete: false
    };
    dispatch(tasks.actions.addItem(newToDo));
    dispatch(tasks.actions.sortItems());
    setInputValue('');
    // https://www.random.org/
  }

  return (
    <ToDoForm onSubmit={onFormSubmit}>
      <label htmlFor="newtask">
        <TextInput
          type="text"
          name="newtask"
          value={inputValue}
          placeholder="add todo..."
          onChange={(e) => setInputValue(e.target.value)} />
      </label>
      <button
        type="submit"
        className="submit-button">
        ADD TODO
      </button>
    </ToDoForm>
  )
}