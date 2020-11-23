import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todos } from 'reducers/todos';
import styled from 'styled-components';

import { Button } from 'lib/Button';

const Wrapper = styled.article`
  display: flex;
  border-bottom: 2px solid lightgrey;
  justify-content: space-between;
  align-items: center;
`;

export const AddTodoForm = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(todos.actions.addTodo({ text })); // name as payload
    setText(''); // Clearing the input
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            placeholder="Add todo"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </label>
        <Button type="submit" background="#3f8488">
          Add
        </Button>
      </form>
    </Wrapper>
  );
};
