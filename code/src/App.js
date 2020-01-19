import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { todoList } from 'reducers/todoList'
import { AddForm } from 'components/AddForm'
import { ListItem } from 'components/ListItem'
import { TaskBar } from 'components/TaskBar'
import { ClearAll } from 'components/ClearAll'

const reducer = combineReducers({
  todoList: todoList.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <TaskBar />
      <AddForm />
      <ListItem />
      <ClearAll />
    </Provider>
  )
}
