import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import  Counter  from 'components/Counter.js'
import  Form  from 'components/Form.js'


import { counter } from 'reducers/counter'
import { tasks } from 'reducers/tasks'
import { TaskList } from 'components/TaskList'


const reducer = combineReducers({
  counter: counter.reducer,
  tasks: tasks.reducer
})

const store = configureStore({ reducer: reducer })

export const App = () => {
  return (

    <Provider store={store}>
    <div>
      <TaskList />
      {/* <Counter /> */}
      <Form />
    </div>
    </Provider>
  )
}
