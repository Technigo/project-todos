import React from 'react'
import { Provider } from 'react-redux'
import { TodoList } from '../Components/TodoList'
import { configureStore, combineReducers} from '@reduxjs/toolkit'
import { todos } from '../reducers/todos'

const reducer = combineReducers({todos:todos.reducer});

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const store = configureStore({reducer, persistedState});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export const Home = () => {
  return(
    <Provider store={store}>
      <main>
        <TodoList />
      </main>
    </Provider>
  );
};