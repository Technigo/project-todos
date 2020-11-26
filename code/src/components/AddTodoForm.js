import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todos } from 'reducers/todos';
import styled from 'styled-components';

import { Button } from 'lib/Button';

const Wrapper = styled.article`
  padding: 10px 0;
  border-bottom: 2px solid #e8e8e8;
`;

const Form = styled.form``;

const Label = styled.label``;

const InputField = styled.input`
  height: 40px;
  width: 140px;
  border: none;
  border-bottom: 2px dotted #e8e8e8;
  margin-left: 10px;
  font-size: 18px;

  @media (min-width: 768px) {
    width: 340px;
  }
`;

export const AddTodoForm = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(todos.actions.addTodo({ text }));
    setText(''); // Clearing the input
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">Add</Button>
        <Label>
          <InputField
            type="text"
            placeholder="Add todo"
            required
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </Label>
      </Form>
    </Wrapper>
  );
};
