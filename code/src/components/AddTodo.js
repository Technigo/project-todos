import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';

import todos from 'reducers/todos'
import {
  Header,
  Form, 
  Input,
  Button
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

  return (
    <Header>
      <Form onSubmit={onFormSubmit}>
        <label>
        <Input 
        type="text" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add new task"
        />
        </label>
        <Button type="submit">+</Button>
      </Form>
    </Header>
  )
};

export default AddTodo;