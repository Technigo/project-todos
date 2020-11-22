import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-date-picker';

import { todos } from '../reducers/todos';
import { Button } from '../library/Button';

const TodoInput = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [category, setCategory] = useState('');
  const [dueDate, setDueDate] = useState('');

  const categories = useSelector(store => store.todos.list.categories);
  console.log(categories);

  const onSubmit = event => {
    event.preventDefault();
    console.log(inputValue);
    dispatch(
      todos.actions.addTodo({
        description: inputValue,
        complete: false,
        category: category,
        dueDate: dueDate,
      })
    );
    dispatch(todos.actions.goToStartPage);
  };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   console.log(inputValue);

  //   dispatch(
  //     todos.actions.addTodo({
  // todoItemInfo: {
  //   description: todoInput,
  //   complete: false,
  // },
  //     })
  //   );
  //   setTodoInput('');
  // };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={event => setInputValue(event.target.value)}
        value={inputValue}
      ></input>
      <label>
        Due Date
        <DatePicker onChange={date => setDueDate(date)} value={dueDate} />
      </label>
      <select
        name="category"
        id="category"
        onChange={event => setCategory(event.target.value)}
        value={category}
      >
        {categories.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <Button type="submit">Add Todo</Button>
      {/* <input type="submit" className="todo" value="Add Todo" /> */}
    </form>
  );
};

export default TodoInput;

// <textarea
//   rows="4"
//   placeholder="Add a todo"
//   onChange={event => setTodoInput(event.target.value)}
//   value={todoInput}
//   className="todo-input"
// />
