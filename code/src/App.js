import React from 'react'
import { Provider } from 'react-redux'

import { combineReducers, createStore } from '@reduxjs/toolkit'


import AddTodos from './components/AddTodos'
import TodosList from './components/TodosList'
import todo from './reducers/todo'
import TaskCounter from './components/TaskCounter'

const reducer = combineReducers({
  todo: todo.reducer,
})

const persistedStateJSON = localStorage.getItem('todosReduxState')
let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

const store = createStore(reducer, persistedState)

store.subscribe(() => {
  localStorage.setItem('todosReduxState', JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Provider store={store}>
      <section className="container">
        <header>
          <h2 className="header">Today's todos</h2>
          <TaskCounter />
        </header>
        <article className="list-container">
          <TodosList />
        </article>
        <article>
          <AddTodos />
        </article>
      </section>
    </Provider>
  )
}
