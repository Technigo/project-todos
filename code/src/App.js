import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from "@reduxjs/toolkit"

import { tasks } from './reducers/tasks'
// import { todo } from './reducers/todo'


import { TaskLists } from './components/TaskLists'
import { AddNewTask } from "./components/AddNewTask"
import { Header } from "./components/Header"



const reducer = combineReducers({
  tasks: tasks.reducer,
  // todo: todo.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (

    <Provider store={store}>
      <main>
        <Header />
        <AddNewTask />
        <TaskLists />
      </main>

    </Provider>

  )
}
