import React from "react";
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { TodoList } from "../components/TodoList";
import { todos } from "../reducers/todos"

//Tells redux about our reducers
const reducer = combineReducers({ todos: todos.reducer})

//Retrieves existing state from localstorage if it exists

//Creates store using our reducers and retrieved state
const store = configureStore({reducer})

// Tells store to persist the state in localstorage after every action

export const Home = () => {
  return (
  <Provider store={store}>
    <main>
    <TodoList></TodoList>
  </main>
  </Provider>)
}