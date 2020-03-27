import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import tasksReducer from './reducers/TasksSlice'
import Filter from 'components/Filter'
import AddTask from 'components/AddTask'

const reducer = combineReducers({
  tasks: tasksReducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <div>
    <Provider store={store}>
      <AddTask />
      <Filter />
    </Provider>
    </div>
  )
}
