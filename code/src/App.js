import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { taskCart } from './reducers/taskCart'
import { todoList } from './reducers/todoList'

import NumberOfTodos from './components/NumberOfTodos'
import AllTodoItems from './components/AllTodoItems'
import AddItem from 'components/AddItem'
import ClearAll from 'components/ClearAll'
import Today from 'components/Today'


const reducer = combineReducers({
  task: taskCart.reducer,
  todolist: todoList.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Today />
        <NumberOfTodos />
        <ClearAll />
        <AddItem />
        <AllTodoItems />
      </div>
    </Provider>
  )
}
