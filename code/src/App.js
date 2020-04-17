import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { todos } from 'reducers/todos'
import { TodoContent } from 'components/TodoContent'

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
      <Provider store={store}>
        <TodoContent />
      </Provider>
  )
}
