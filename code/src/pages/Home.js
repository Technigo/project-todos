import React from 'react'
import { Provider } from "react-redux"
import { TodoInput } from '../components/TodoInput'
import { TodoList } from "../components/TodoList"
import { createStore, combineReducers, configureStore } from "@reduxjs/toolkit"
import { todos } from "../reducers/todos"

/* PLAN 
- create TodoInput 
- create store
- use Provider
- create TodoList
- create TodoItem 
- Create TodoSummary
 */

// StoreCreation: Tell redux about out reducers
const reducer = combineReducers({ todos: todos.reducer })


// Persistence: Retrive the exsiting state from local storage if it exsist 
// StoreCreation: Create the store using our reducers and the state
const store = configureStore({ reducer })

// Persistance: Tell the store to persist the state in localstorage efter each action 

export const Home = () => {
  return (
    <Provider store={store}>
      <main>
        <TodoList></TodoList>
      </main>
    </Provider>
  )
}