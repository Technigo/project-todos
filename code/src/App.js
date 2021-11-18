import React from 'react'
import { Provider } from 'react-redux'
// import { BrowserRouter } from 'react-dom'
import { combineReducers, createStore } from '@reduxjs/toolkit'
// import { useNavigate } from 'react-redux-dom'

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
          <h3 className="header">Quick todo</h3>
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
