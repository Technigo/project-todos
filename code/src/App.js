import "./styles/main.css"
import React from 'react'
import TodoInput from 'components/TodoInput'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux'
import { todos } from "reducers/todos";
import TodoList from "components/TodoList";

const reducer = combineReducers({
    todos: todos.reducer
})

const store = configureStore({ 
  reducer,
});

export const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>To do app</h1>
        <TodoInput />
        <TodoList />
      </div>
    </Provider>
  );
}



