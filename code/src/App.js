import React from 'react'
import GlobalFonts from './fonts/fonts'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'
import TodoList from './components/TodoList'

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div>
      <GlobalFonts />
       <TodoList />
      </div>
    </Provider>
  )
}
