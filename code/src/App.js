import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { todos } from 'reducers/todos'
import { TodoList } from 'components/TodoList'
import { total } from 'reducers/total'
import { Header } from 'components/Header'
import { StyleSheet } from 'react'
import { AddTodo } from './components/AddTodo'

const reducer = combineReducers({
  todos: todos.reducer,
  total: total.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <AddTodo />
      <total />
      <TodoList />
    </Provider>
  )
}



// export const App = () => {
//   return (
//     <div>
//       Find me in src/app.js!
//     </div>
//   )
// }