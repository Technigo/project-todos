import React from 'react'
import { createStore, combineReducers } from '@reduxjs/toolkit'
import { TodoList } from 'components/TodoList'
import { Provider } from 'react-redux'

import { todos } from 'reducers/todos.js'


const reducer = combineReducers({  todos: todos.reducer })

const persistedState = localStorage.getItem("reduxState")
? JSON.parse(localStorage.getItem("reduxState"))
 : {};

 const store = createStore(reducer, persistedState);

 store.subscribe(() => {
   localStorage.setItem("reduxState", JSON.stringify(store.getState()));

 });


export const App = () => {

  return (
    <Provider store={store}>
    <main>
    <TodoList></TodoList>
    </main>
  </Provider>


  );


};

  
  
  
  
  

