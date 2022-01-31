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
    border-radius: 0.2rem, 0;
    background-color: rgb(255, 255, 255);
    border: none;
    width: 65%;
    display: inline-block;
    border-bottom: 0.1rem solid grey;
    transition: all 0.3s;
  }
`;

const AddTodo = () => {
  const [todoInput, setTodoInput] = useState('');

  const dispatch = useDispatch();

  const onAddTodo = (event) => {
    event.preventDefault();
    if (todoInput !== '') {
      dispatch(todos.actions.addTodo(todoInput));
      setTodoInput('');
    } else {
      alert('Write your todo before adding it :)');
    }
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
        placeholder='&#x0002B; Write new task here'
        required=''
      />
      <StyledAddTodoButton type='submit'>
        <img
          className='button-text'
          aria-label='icon'
          alt='svg-icon'
          src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD48ZyBmaWxsPSIjNDY1MzVlIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik03OC44MzMzMywxNC4zMzMzM3Y2NC41aC02NC41djE0LjMzMzMzaDY0LjV2NjQuNWgxNC4zMzMzM3YtNjQuNWg2NC41di0xNC4zMzMzM2gtNjQuNXYtNjQuNXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=='
        />
      </StyledAddTodoButton>
    </StyledForm>
  );
};

export default AddTodo;
