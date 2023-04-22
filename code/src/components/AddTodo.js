import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import todos from 'reducers/todos';
import { Button, Input } from './AddTodoStyled';

const AddTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: Date.now().toString(),
      name: inputValue.toUpperCase(),
      isComplete: false
    };
    dispatch(todos.actions.addTodo(newTodo));
    setInputValue('');
    // https://www.random.org/
  }
  return (
    <section>
      <form onSubmit={onFormSubmit}>
        <Input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          id="addTodoInput"
          type="text"
          placeholder="Enter new task" />
        <Button type="submit">+</Button>
      </form>
    </section>
  )
}

export default AddTodo;