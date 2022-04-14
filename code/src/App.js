import React from 'react'
import {Provider} from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'

import { todos } from 'reducers/todos'
import { AddTodo } from 'components/AddTodo'
import { TodoList } from 'components/TodoList'

import {
  Wrapper,
  ProviderContainer
} from '../src/components/Styling'

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
      <Wrapper>
        <ProviderContainer className="provider-container">
          <TodoList />
          <AddTodo />
        </ProviderContainer>
      </Wrapper>
    </Provider>
  )
}




