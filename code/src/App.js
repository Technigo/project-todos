import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'

import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const reducer = combineReducers({  // Combine reducers together (slices)
  todos: todos.reducer // the slice todos is a container that we now put in the handbag(store)
  // here I can add more slices like: users: users.reducer, messages: messages.reducer
}) 

const store = configureStore({ reducer }) // variable store that takes one argument that is an object

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <article className="todos-container">
        <TodoForm />
        <TodoList />
      </article>
    </Provider>
  )
}
