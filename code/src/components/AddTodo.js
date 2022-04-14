import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import moment from 'moment';

import todos from 'reducers/todos'
import {
  Form, 
  Input,
  AddButton,
} from 'Styles'

const AddTodo = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: uniqid(),
      title: inputValue,
      isDone: false,
    }

    dispatch(todos.actions.addItem(newTodo));

    setInputValue("");
  };

  const date = moment().format('MMMM Do YYYY');

  return (
      <Form onSubmit={onFormSubmit}>
        <p>{date}</p>
          <label>
          <Input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add new task"
          />
          <AddButton type="submit">
            <span 
            className='button-span'
            role="img" 
            aria-label="submit-mark"
            >➕</span>
          </AddButton>
          </label>
      </Form>
  )
};

export default AddTodo;