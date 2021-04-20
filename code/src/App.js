import React from 'react'
import {Provider} from 'react-redux'
import {combineReducers, configureStore} from '@reduxjs/toolkit'

import todo from './reducers/todo'

const reducer = combineReducers({
  todo: todo.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      Find me in src/app.js!
    </Provider>
  )
}
