import "./styles/main.css"
import React from 'react'
import TodoInput from 'components/TodoInput'
import TodoFilter from 'components/TodoFilter';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux'
import { reducer } from "reducers/reducer";

const store = configureStore({ 
  reducer,
});

export const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>To do app</h1>
        <TodoInput />
        <TodoFilter />
      </div>
    </Provider>
  );
}



