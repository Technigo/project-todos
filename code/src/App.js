import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import Header from './components/Header'
import Footer from './components/Footer'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

import todos from './reducer/todos'

const reducer = combineReducers({
  todos: todos.reducer,
})

const store = configureStore({
  reducer,
})
export const App = () => {
  return (
    <Provider store={store}>
      <main className="main-container">
        <Header />
        <AddTodo />
        <TodoList />
        <Footer />
      </main>
    </Provider>
  )
}
