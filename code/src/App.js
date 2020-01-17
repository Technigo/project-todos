import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Header } from 'components/Header'
import { AddTaskForm } from './components/AddTaskForm'
import { TaskList } from './components/TaskList'
import { fridge } from './reducers/fridge'
import './app.css'

const reducer = combineReducers({
 fridge: fridge.reducer
//   tasks: tasks.reducer
})

const store = configureStore({ reducer: reducer})


export const App = () => {
  return (
    <Provider store={store}>
    {/* <> */}
    <Header />
    <AddTaskForm />
    <TaskList />
    {/* </> */}
    </Provider>
  )
}
