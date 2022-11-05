import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import NewTask from 'components/NewTask'
// import { OuterWrapper, InnerWrapper } from 'components/styling/Wrappers'
import TodoList from 'components/TodoList'
import todo from 'reducers/todo'
import NewTodo from 'components/NewTodo'

const reducer = combineReducers({
  todo: todo.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
      <NewTodo />
    </Provider>
  )
}