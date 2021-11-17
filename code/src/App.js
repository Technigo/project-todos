import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { todos } from './reducers/todos'
import { TodoList } from 'components/TodoList'
import { AddTodo } from 'components/AddTodo'
import { CategorySection } from 'components/CategorySection'

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <AddTodo />
      <CategorySection />
      <TodoList />
    </Provider>
  )
}
