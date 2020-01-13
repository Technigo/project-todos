import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { todos } from 'reducers/todos'
import { Todos } from 'components/Todos'
import { total } from 'reducers/total'
import { Header } from 'components/Header'
import { StyleSheet } from 'react'

const reducer = combineReducers({
  todos: todos.reducer,
  total: total.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <total />
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
