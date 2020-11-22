import React from 'react';
import { useSelector } from 'react-redux';
// import { Provider } from 'react-redux';
// import { combineReducers, configureStore } from '@reduxjs/toolkit';

// import { todos } from '../reducers/todos';
import TodoInput from 'components/TodoInput';
import TodoList from 'components/TodoList';
import CreateTodo from './CreateTodo';
import TodaysDate from 'components/TodaysDate';

const Home = () => {
  const startPage = useSelector(store => store.todos.startPage);
  console.log(!startPage ? 'true' : 'false');
  return (
    <main>
      <TodaysDate />
      {!startPage ? <TodoList /> : <CreateTodo />}
    </main>
  );
};

export default Home;
