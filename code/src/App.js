import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'

import Content from 'components/Content'

const reducer = combineReducers ({
  todos: todos.reducer
})

const store = configureStore ({ reducer })

export const App = () => {
  return (
    < Provider store={store}>
      < Content />
    </Provider>
  )
}
