import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import Container from './components/Container'
import todos from './reducers/todos'


const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  // const items = useSelector((store) => store.todos.items)

  return (
    <Provider store={store}>
      <Container />
    </Provider>
  )
}
