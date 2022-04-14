import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useState } from 'react';
import todo from 'reducers/todo';
import TodoList from 'components/TodoList';
import AddTodo from 'components/AddTodo';
import Header from 'components/Header';

const reducer = combineReducers({
  todo: todo.reducer,
});

const store = configureStore({
  reducer: reducer,
});

export const App = () => {
  const [all, setAll] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [uncompleted, setUncompleted] = useState(false);
  return (
    <Provider store={store}>
      <Header
        completed={completed}
        uncompleted={uncompleted}
        all={all}
        setCompleted={setCompleted}
        setUncompleted={setUncompleted}
        setAll={setAll}
      />
      <AddTodo />
      <TodoList completed={completed} uncompleted={uncompleted} all={all} />
    </Provider>
  );
};
