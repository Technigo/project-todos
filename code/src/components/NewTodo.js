import React, { useState } from 'react';
import styled from 'styled-components'; 
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';

import todos from '../reducers/todos';

import SubmitButton from './SubmitButton';
import ErrorMessage from './ErrorMessage';

const Form = styled.form`
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
  const [errorMessage, setErrorMessage] = useState('');
  
  const dispatch = useDispatch();

  const validateFormInput = () => {
    let isFormValid = true;

    if (todo.length < 1) {
      setErrorMessage('You did not write any characters. Try again!'); 
      isFormValid = false;
    } else {
      setErrorMessage('');
      isFormValid = true;
    }

    return isFormValid;
  };

  const onTodoSubmit = (e) => {
    e.preventDefault();

    if (!validateFormInput()) {
      return;
    }

    const newTodo = {
      id: uniqid(),
      content: todo,
      isComplete: false,
    };

    dispatch(todos.actions.addTodo(newTodo));
    setTodo('');
  };

  return (
    <Form
      onSubmit={onTodoSubmit}
    >
      <SubmitButton />
      <Label>
        <Textarea
          id="newTodo"
          type="text"
          placeholder="Add todo"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        >
        </Textarea>
      </Label>
      <ErrorMessage 
        errorMessage={errorMessage}
      />
    </Form>
  );
};

export default NewTodo;