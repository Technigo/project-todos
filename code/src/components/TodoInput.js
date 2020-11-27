import React, { useState } from 'react';
import { todos } from 'reducers/todos';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Input = styled.input`
  font-size: 15px;
  font-family: monospace;
  height: auto;
  color: black;
  background-color: whitesmoke;
  border: none;

  &:focus,
  &:active {
    outline: 0;
  }
`;

const Button = styled.button`
  width: 25px;
  height: 25px;
  color: white;
  background: black;
  margin-left: 5px;
  border none;
  border-radius: 50%;
  cursor: pointer;

  &:focus {
    outline: 0;
  }
`;


export const TodoInput = () => {
  const dispatch = useDispatch();
  const [valueInput, setValueInput] = useState('');

  const handleOnSubmit = event => {
    event.preventDefault();

    dispatch(
      todos.actions.addTodo({
        description: valueInput,
        done: false
      })
    );
    setValueInput('');
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Input
        type='text'
        onChange={event => setValueInput(event.target.value)}
        value={valueInput}
        required
      />
      <Button
        type='submit'
        background='#0000'
        color='#fffff'
      >
        +
      </Button>
    </Form>
  )
};
