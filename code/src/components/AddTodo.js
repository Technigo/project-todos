/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todos } from 'reducers/todo';
import styled from 'styled-components';

const NewTodo = styled.form`
  line-height: 1em;
  padding-bottom: 10px;
`;

const Input = styled.input`
  background: #fff;
  border: none;
  padding: 8px;
  font-size: 18px;
  font-family: 'Baloo 2', cursive;
  border-bottom: 2px dashed;

  :focus {
    outline: none;
  }
`;

const AddButton = styled.button`
  font-family: 'Baloo 2', cursive;
  font-size: 18px;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const AddTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: todos.id,
      key: todos.id,
      text: inputValue,
      isDone: false
    };
    dispatch(todos.actions.addItem(newTodo));
    setInputValue('');
  };

  return (
    <NewTodo onSubmit={onFormSubmit}>
      <label>
        <p>New Task:</p>
        <Input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </label>
      <AddButton type="submit" disabled={inputValue.length === 0}>
        ADD
      </AddButton>
    </NewTodo>
  );
};
