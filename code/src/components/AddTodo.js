import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { todos } from 'reducers/todos';
import { visibilityFilter } from 'reducers/visibilityFilter';

const StyledAddTodo = styled.div``;

const Form = styled.form`
  height: 55px;
  display: grid;
  grid-template-columns: 57px 12fr;
  grid-gap: 0.5rem;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  font-size: 1rem;
  margin-right: 0.5rem;
  padding: 0.5rem;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
    padding-left: 0;
  }

  &:focus::placeholder {
    color: #000;
    transition: color 150ms ease-in-out;
  }
`;

const Button = styled.button`
  color: rgba(0, 0, 0, 0.3);
  padding: 0 1rem 0 1.2rem;
  background-color: transparent;
  border: none;
  font-weight: bold;
  font-size: 1.5rem;

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
    dispatch(visibilityFilter.actions.setVisibility({ filter: 'SHOW_ALL' }));
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
          placeholder="New to-do"
        />
      </Form>
    </StyledAddTodo>
  );
};
