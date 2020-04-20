import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TodoInput } from './components/TodoInput'
import { todoStore } from './reducers/todoStore'
import { TodoList } from './components/TodoList'
import { TodoSummary } from './components/TodoSummary'

const reducer = combineReducers({ todoStore: todoStore.reducer })
const store = configureStore({ reducer })

export const App = () => {
  return (
    //the provider makes it possible to use the useSelector
    <Provider store = {store}>
      <main>
        <TodoList />
        <TodoSummary />
      </main>
    </Provider>
  )
}
// I can reach my store by putting store.todoStore