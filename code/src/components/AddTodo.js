import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import todos from 'reducers/todos';
import { Button, Input, Task } from './AddTodoStyled';

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
      <Task>
        <form onSubmit={onFormSubmit}>
          <Input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            id="addTodoInput"
            type="text"
            placeholder="Enter new task here" />
          <Button type="submit">+</Button>
        </form>
      </Task>
    </section>
  )
}

export default AddTodo;