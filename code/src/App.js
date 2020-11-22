import React from 'react'
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"

import { todoTasks } from './reducer/todoTasks'
import { AddTodo } from "./components/AddTodo"
import { TodoList } from "./components/TodoList"


//creating a single reducer from several reducers
export const reducer = combineReducers({
  //referring to the key *name* of the reducer
  todoTasks: todoTasks.reducer
})

//using the reducer to create a store
const store = configureStore({ reducer: reducer }) //can also be written as {reducer}

export const App = () => {
  return (
    //store is passed to provider as a prop
    <Provider store={store}>
      <TodoList />
      <AddTodo />

      <div>
        Good luck with the todo! ^^
      </div>
    </Provider>
  )
}
