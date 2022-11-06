import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
// import NewTask from 'components/NewTask'
import { OuterWrapper, InnerWrapper } from 'components/styling/Wrappers'
import TodoList from 'components/TodoList'
import todo from 'reducers/todo'
import NewTodo from 'components/NewTodo'
import { Header } from 'components/Header'

const reducer = combineReducers({
  todo: todo.reducer
})

const store = configureStore({ reducer })

store.subscribe(() => localStorage.setItem('todos', JSON.stringify(store.getState().todo.items)))

export const App = () => {
  return (
    <Provider store={store}>
      <OuterWrapper>
        <InnerWrapper>
          <Header />
          <TodoList />
          <NewTodo />
        </InnerWrapper>
      </OuterWrapper>
    </Provider>
  )
}