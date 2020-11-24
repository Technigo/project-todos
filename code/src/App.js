import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import NumberOfTodos from './components/NumberOfTodos'
import AllTodoItems from './components/AllTodoItems'

import { taskCart } from './reducers/taskCart'
import { todoList } from './reducers/todoList'

const reducer = combineReducers({
  task: taskCart.reducer,
  todolist: todoList.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <NumberOfTodos />
        <AllTodoItems />
      </div>
    </Provider>
  )
}
