import React from 'react'
import GlobalFonts from './fonts/fonts'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import { Tasks } from './components/Tasks'
import { ClearTasks } from './components/ClearTasks'
import { todo } from 'reducers/todo'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTasks, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faTasks, faCheckCircle)


const reducer = combineReducers({
  todo: todo.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <GlobalFonts />
        <Header />
        <AddTask />
        <Tasks />
        <ClearTasks />
      </Provider>
    </>
  )
}
