import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { todos } from './reducers/todos'
import { ToDoPage } from 'pages/TodoPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreateTodo } from 'pages/CreateTodo'

const reducer = combineReducers({
  todos: todos.reducer,
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
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
            <Route exact path="/" element={<ToDoPage />} />
            <Route path="/create_todo" element={<CreateTodo />} />
          </Routes>
      </Provider>
    </BrowserRouter>
  )
}
