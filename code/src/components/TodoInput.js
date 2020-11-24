import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

import { todos } from '../reducers/todos';
import { Button } from '../library/Button';

const TodoInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [category, setCategory] = useState('');
  const [dueDate, setDueDate] = useState(new Date());

  const dispatch = useDispatch();
  const history = useHistory();

  const categories = useSelector(store => store.todos.list.categories);
  console.log(categories);

  const onSubmit = event => {
    event.preventDefault();
    console.log(inputValue);
    dispatch(
      todos.actions.addTodo({
        todoItemInfo: {
          id: uuidv4(),
          description: inputValue,
          complete: false,
          category: category,
          dueDate: dueDate.getTime(),
        },
      })
    );
    history.goBack();
  };

  return (
    <Main>
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
          <option value="">Category</option>
          {categories.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <Button type="submit">Add Todo</Button>
      </form>
    </Main>
  );
};

export default TodoInput;

const Main = styled.main`
  display: flex;
`;
