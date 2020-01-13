import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { todos } from 'reducers/todos'
import { Todos } from 'components/Todos'
import { totalTodos } from 'reducers/totalTodos'
import { Header } from 'components/Header'
import { StyleSheet } from 'react'

const reducer = combineReducers({
  todos: todos.reducer,
  totalTodos: totalTodos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <totalTodos />
      <Todos />
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
