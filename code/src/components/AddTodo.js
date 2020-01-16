import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { todos } from 'reducers/todos';

const StyledAddTodo = styled.div`
  border-bottom: ${props =>
    props.empty ? '1px solid rgba(0, 0, 0, 0.1)' : ''};
`;

const Form = styled.form`
  height: 55px;
  /* display: flex; */
  display: grid;
  grid-template-columns: 50px 12fr;
  grid-gap: 0.5rem;
  align-items: center;
`;

const Input = styled.input`
  /* width: 90%; */
  /* padding-left: 1rem; */
  /* flex-grow: 2; */
  border: none;
  outline: none;
  font-size: 1rem;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
    padding-left: 0;
  }

  &:focus::placeholder {
    color: rgba(230, 0, 60, 1);
    transition: color 150ms ease-in-out;
  }
`;

const Button = styled.button`
  /* width: 50px; */
  color: rgba(0, 0, 0, 0.3);
  padding: 0 1rem;
  background-color: transparent;
  border: none;
  font-weight: bold;
  font-size: 1.5rem;
  outline: none;

  &:hover {
    color: rgba(230, 0, 60, 1);
    cursor: pointer;
    transition: all 0.3s ease-in;
  }
`;

export const AddTodo = () => {
  const allTodos = useSelector(state => state.todos);
  const [todoText, setTodoText] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = e => {
    setTodoText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!todoText.trim()) {
      return;
    }
    dispatch(todos.actions.addTodo({ text: todoText }));
    setTodoText('');
  };

  return (
    <StyledAddTodo empty={allTodos.length === 0}>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <i class="far fa-plus-square"></i>
        </Button>
        <Input
          value={todoText}
          type="text"
          onChange={handleInputChange}
          placeholder="Add todo"
        />
      </Form>
    </StyledAddTodo>
  );
};
