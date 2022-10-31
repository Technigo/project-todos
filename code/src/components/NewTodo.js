import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import moment from 'moment';
import todos from '../reducers/store';

const NewTodo = () => {
  const [input, setInput] = useState('')
  const [dueDate, SetDueDate] = useState('')
  const dispatch = useDispatch();

  const onNewTodo = (event) => {
    event.preventDefault(event);

    const Todo = {
      id: uniqid(),
      name: input,
      date: dueDate,
      completed: false,
      postedTime: moment().format('ddd D MMM')

    }

    dispatch(todos.actions.addTodo(Todo))

    setInput('')
  }
  return (
    <form onSubmit={onNewTodo}>
      <input
        type="text"
        value={input}
        placeholder="let´s be productive"
        onChange={(event) => setInput(event.target.value)}
        required />
      <input
        type="date"
        value={dueDate}
        onChange={(event) => SetDueDate(event.target.value)} />
      <button type="submit">Send</button>
    </form>
  )
}

export default NewTodo