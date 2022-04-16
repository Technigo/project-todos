import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import  Form  from 'components/Form.js'

import { tasks } from 'reducers/tasks'
import { TaskList } from 'components/TaskList'
import { Sort } from 'components/Sort'


import ScriptTag from 'react-script-tag'



const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer: reducer })

export const App = () => {
  return (
    
    <Provider store={store}>
    <div className="content-wrapper">
      <TaskList />
      <Form />

      {/* <Sort /> */}


    </div>
    
 
    </Provider>

    
  )
}
