import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit' 
import { ToDoList } from 'reducers/ToDoList'

import { Header } from 'components/Header'
import { AddTask } from 'components/AddTask'
import { TaskList } from 'components/TaskList'
import { Counter } from 'components/Counter'


const reducer = combineReducers({
  ToDoList: ToDoList.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <section className="toDoSection">
    <Provider store={store}>
      <div className="toDoList">
        <Header />
        <AddTask />
        <TaskList />
        <Counter />
      </div>
    </Provider>
    </section>
  )
}
