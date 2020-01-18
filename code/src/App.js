import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from "@reduxjs/toolkit"

import { tasks } from './reducers/tasks'
// import { todo } from './reducers/todo'


import { TasksList } from './components/TasksList'
import { AddNewTask } from "./components/AddNewTask"
import { Header } from "./components/Header"
import { TasksSummary } from "./components/TasksSummary"



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
        <TasksSummary />
        <AddNewTask />
        <TasksList />
      </main>

    </Provider>

  )
}
