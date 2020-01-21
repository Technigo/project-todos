import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from "@reduxjs/toolkit"

import { tasks } from './reducers/tasks'
import { dialogs } from './reducers/dialogs'

// import { Dialog } from "components/Dialog"
import { TasksList } from './components/TasksList'
import { AddNewTask } from "./components/AddNewTask"
import { Header } from "./components/Header"




const reducer = combineReducers({
  tasks: tasks.reducer,
  dialogs: dialogs.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (

    <Provider store={store}>
      <main>
        <Header />
        <AddNewTask />
        <TasksList />
      </main>
    </Provider>

  )
}
