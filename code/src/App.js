import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore} from '@reduxjs/toolkit'

import { todoList } from 'reducers/todoList'
import { AddForm } from 'components/AddForm'

const reducer = combineReducers({
 todoList: todoList.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
<Provider store={store}>
  <AddForm />
</Provider>

  )
}
