import React from 'react'
import { Header } from './components/Header'
import { TodoList } from './components/TodoList'
import { TodoInput } from './components/TodoInput'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { todos } from './reducers/reducer'
import styled from 'styled-components'


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border-radius: 6px;
  margin: 5em auto;
  background-color: white;
  font-family: 'Helvetica';
`
const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })


export const App = () => {
  return (
    <Provider store={store}>
      <AppContainer>
        <Header />
        <TodoList />
        <TodoInput />
      </AppContainer>
    </Provider>
  )
}
