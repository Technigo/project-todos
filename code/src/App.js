import React from 'react'
import { Provider } from 'react-redux'
import { ToDoScreen } from 'components/ToDoScreen'
import { AddToDoScreen } from 'components/AddToDoScreen'

export const App = () => {
  return (
    <Provider store={store}>
      <ToDoScreen />
      <AddToDoScreen />
    </Provider>
  )
}
