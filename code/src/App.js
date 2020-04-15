import React from 'react'
import {Provider} from 'react-redux'
import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { NewTask } from 'components/NewTask'
import { TaskList } from 'components/TaskList'
import {todoStore} from 'reducers/todoStore'


const reducer = combineReducers({
  todoStore: todoStore.reducer
})

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
     <NewTask />
     <TaskList /> 
     
    </Provider>
  )
}
