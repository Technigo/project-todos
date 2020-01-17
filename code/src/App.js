import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { tasks } from 'reducers/tasks'
import { ToDoList } from 'components/ToDoList'
import { AddTask } from 'components/AddTask'
import { ClearButton } from 'components/ClearButton'
import { Summary } from 'components/Summary'
import 'css/todo-list.css'

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div className="body">
        <div className="todo-list">
          <ToDoList />

          <ClearButton />
          <Summary />
          <AddTask />
        </div>
      </div>
    </Provider>
  )
}
