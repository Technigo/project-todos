import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers, createStore } from '@reduxjs/toolkit'
import { ToDoList } from './Components/ToDoList'
import { todoitem } from './Components/Reducers/todoitem'

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const reducer = combineReducers({ todoitem: todoitem.reducer });
const persistedState = loadFromLocalStorage();
const store = createStore(
  reducer, 
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  store.subscribe(() => saveToLocalStorage(store.getState())
);

export const App = () => {

  return (
    <Provider store={store}>
      < ToDoList />
    </Provider>
  )
}
