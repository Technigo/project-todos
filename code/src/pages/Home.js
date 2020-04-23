import React from 'react'
import { Provider } from 'react-redux'
import { TodoList } from 'components/TodoList.js'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { todos } from '../reducers/todos'

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    console.log(e);
  }
};
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
} 

const reducer = combineReducers({ todos: todos.reducer });

const persistedState = loadFromLocalStorage();

const store = createStore(reducer, persistedState);

store.subscribe(() => saveToLocalStorage(store.getState()));

export const Home = () => {
    return (
        <Provider store={store}>
            <main>
             <TodoList />
            </main>
        </Provider>
    )
};