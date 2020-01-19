import React from 'react'
import {Provider} from 'react-redux'
import {configureStore, combineReducers} from '@reduxjs/toolkit'
import moment from 'moment'

import {Header} from 'components/Header'
import {Tasks} from 'components/Tasks'
import {Footer} from 'components/Footer'
import './app.css'

import {tasks} from 'reducers/tasks'
import {header} from 'reducers/header'

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer: reducer })

export const App = () => {
  return (
    <Provider  store={store}>
      <div className='backgroundContainer'>
      <Header/>
      <Tasks/>
      <Footer/>
      </div>
    </Provider>
  )
}
