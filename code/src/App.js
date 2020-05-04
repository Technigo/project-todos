import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { TaskList } from 'Components/TaskList'
import { TaskSummary } from 'Components/TaskSummary'
import './App.css'

import {todos} from './Reducers/todos'
import moment from 'moment'
import Divider from '@material-ui/core/Divider'



const reducer = combineReducers({ 
  todos: todos.reducer
})
 
const store = configureStore({reducer})

export const App = () => {

const day = moment().format('HH:mm | D/M')



  return (
    <Provider store={store}>
      <main>
        <header>
          <h1>TODO</h1>
          <section className="daysummary">
            <p>{day}</p>
            <TaskSummary />
          </section>
          <Divider light />
        </header>

        <section className="tasklist">
         <TaskList />
        </section>
      </main>
    </Provider>
  )
}
