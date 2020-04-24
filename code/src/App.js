import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TaskList } from 'components/TaskList'
import { AddTask } from 'components/AddTask'

import { tasks } from 'reducers/tasks'
// another reducer 

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <div>
      <Provider store={store} >
        {/* <Summary /> */}
        <TaskList />
        <AddTask />
      </Provider>
    </div>
  )
}
