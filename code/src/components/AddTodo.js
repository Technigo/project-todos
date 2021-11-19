import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import todos from '../reducers/todos';

import { StyledAddTodoButton } from './StyledButtons';

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2vh 2vw;

  .todo-input {
    font-family: 'Roboto', sans-serif;
    color: #333;
    font-size: 1.2rem;
    margin: 2vh 2vw;
    padding: 1rem;
    border-radius: 0.2rem;
    background-color: rgb(255, 255, 255);
    border: none;
    width: 65%;
    display: inline-block;
    border-bottom: 0.3rem solid transparent;
    transition: all 0.3s;
  }
`;

const AddTodo = () => {
  const [todoInput, setTodoInput] = useState('');

  const dispatch = useDispatch();

  const onAddTodo = (event) => {
    event.preventDefault();
    dispatch(todos.actions.addTodo(todoInput));
    setTodoInput('');
  };

  const onTodoInputChange = (event) => {
    setTodoInput(event.target.value);
  };

  return (
    <StyledForm onSubmit={onAddTodo}>
      <input
        className='todo-input'
        type='text'
        value={todoInput}
        onChange={onTodoInputChange}
        placeholder='&#x0002B; Add task'
        required=''
      />
      <StyledAddTodoButton type='submit' disabled={todoInput === ''}>
        <span className='button-text'>&#x2B;</span>
      </StyledAddTodoButton>
    </StyledForm>
  );
};

export default AddTodo;
