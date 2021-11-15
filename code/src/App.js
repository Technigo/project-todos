import React from 'react'
import { Provider } from 'react-redux'
// import { BrowserRouter } from 'react-dom'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import { useNavigate } from 'react-redux-dom'

import AddTodos from './components/AddTodos'
import TodosList from './components/TodosList'
import todo from './reducers/todo'

const reducer = combineReducers({
  todo: todo.reducer,
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <section className="container">
        <article className="list-container">
          <TodosList />
        </article>
        <article className="addtodo-container">
          <AddTodos />
        </article>
      </section>
    </Provider>
  )
}
