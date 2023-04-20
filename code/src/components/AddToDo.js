/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todos } from 'redux/reducers/todos';
import styled from 'styled-components';

const NewToDo = styled.form`
  line-height: 0.5rem;
  padding-bottom: 0.8rem;
`;

const Input = styled.input`
  background: #a83256;
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

export const AddToDo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();

    const newToDo = {
      id: Date.now().toString(),
      createdAt: new Date(),
      text: inputValue.charAt(0).toUpperCase() + inputValue.slice(1),
      isDone: false
    };
    dispatch(todos.actions.addItem(newToDo));
    setInputValue('');
    // https://www.random.org
  };

  return (
    <section>
      <NewToDo onSubmit={onFormSubmit}>
        <label>
          {/* htmlFor={`new-todo-input${newToDo.id}`} */}
          <p>New to do:</p>
          <Input
            type="text"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)} />
          {/* id={`new-todo-input${newToDo.id}`} /> */}
        </label>
        <AddButton type="submit" disabled={inputValue.length === 0}>
          Add new To Do now
        </AddButton>
      </NewToDo>
    </section>
  );
};