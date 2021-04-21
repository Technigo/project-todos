import React, { useState } from 'react';
import styled from 'styled-components'; 
import { useDispatch } from 'react-redux';

import todos from '../reducers/todos';

import SubmitButton from './SubmitButton';

const Container = styled.div`
  background: transparent;
`;

const Label = styled.label`
  background: transparent;
`;

const Textarea = styled.textarea`
  width: 50%;
  resize: none;
`;

const NewTodo = () => {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const handleTodoSubmit = () => {
    dispatch(todos.actions.addTodo(todo));
  };

  return (
    <Container>
      <SubmitButton onTodoSubmit={handleTodoSubmit} />
      <Label>
        <Textarea
          id="newTodo"
          type="text"
          placeholder="Add todo"
          value={todo}
          onChange={handleInputChange}
        >
        </Textarea>
      </Label>
    </Container>
  );
};

export default NewTodo;