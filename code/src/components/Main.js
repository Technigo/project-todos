import React from 'react';
import { Provider } from 'react-redux';
import ToDoList from 'components/ToDoList';
import { AddToDo } from 'components/AddToDo';
import { Counter } from 'components/Counter'

export const Main = () => {
  return (
    <Provider>
      <AddToDo />
      <Counter />
      <ToDoList />
    </Provider>
  );
}