/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import styled from 'styled-components';
import uniqid from 'uniqid';

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
      id: uniqid(),
      key: tasks.id,
      text: inputValue,
      isDone: false
    };
    dispatch(tasks.actions.addItem(newTodo));
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
