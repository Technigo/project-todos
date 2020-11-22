import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import Header from './Header';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import TodoSummary from './TodoSummary';
import { Button } from '../library/Button';
import CreateTodo from 'pages/CreateTodo';
import { todos } from '../reducers/todos';
import RemoveButton from './RemoveButton';

const TodoList = () => {
  const [category, setCategory] = useState('');

  const list = useSelector(store => {
    if (!category || category === 'All') return store.todos.list.items;
    else
      return store.todos.list.items.filter(item => item.category === category);
  });
  console.log(list);

  const categories = useSelector(store => store.todos.list.categories);
  console.log(`TodoList ${categories}`);

  //const list = useSelector(store => store.todos.list);
  const startPage = useSelector(store => store.todos.startPage);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(todos.actions.goToAddTodo());
  };

  return (
    <>
      <Header />
      <Main>
        <label htmlFor="category">Choose a category:</label>
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
        {/* <TodoInput/>  */}
        {/* {list.items.map(item => item.description)} */}
        {list.map((item, index) => (
          <TodoItem key={index} itemIndex={index} />
        ))}
        {/* <TodoItem />  */}

        {/* <TodoInput />
      {list.items.map((item, index) => (
        <TodoItem key={index} itemIndex={index} />
      ))} */}
        <RemoveButton />
      </Main>
    </>
  );
};

export default TodoList;

const Main = styled.main`
  display: grid;
  grid-gap: 20px;
  padding: 25px;
`;
