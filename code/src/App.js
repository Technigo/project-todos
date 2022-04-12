import React from 'react'
import {Provider} from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import styled from 'styled-components'

import { todos } from 'reducers/todos'
import { AddTodo } from 'components/AddTodo'
import { TodoList } from 'components/TodoList'

const reducer = combineReducers({
  todos: todos.reducer,
})

//Local storage
const persistedStateJSON = localStorage.getItem('todosReduxState')
let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

const store = createStore(reducer, persistedState)

store.subscribe(() => {
  localStorage.setItem('todosReduxState', JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Provider store={store}>
      <ProviderContainer>
        <TodoList />
        <AddTodo />
      </ProviderContainer>
    </Provider>
  )
}

const ProviderContainer = styled.section`
  min-height: 600px;
  min-width: 400px;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 50px;
  background-color: rgba(255, 255, 255, 0.473);
  margin: 100px 700px;
  padding: 50px;
  border-radius: 20px;
  background: #ecf0f3;
   box-shadow: 13px 13px 20px #cbced1,
              -13px -13px 20px #ffffff;
`