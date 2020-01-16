import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { todoTasks } from 'reducers/todoTasks'

import { TodoList } from 'components/TodoList'
//import { total } from 'reducers/total'
import { Header } from 'components/Header'
//import { StyleSheet } from 'react'
import { AddTodoForm } from './components/AddTodoForm'

//create reducer
const reducer = combineReducers({
  todoTasks: todoTasks.reducer,
  //total: total.reducer
})

// create store 
const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <AddTodoForm />
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
