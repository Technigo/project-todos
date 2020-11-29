import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import styled from 'styled-components'

import { todos } from './reducers/todos.js'

import { Header } from './components/Header.js'
import { TaskInput } from './components/TaskInput.js'
import { TaskList } from './components/TaskList.js'
import { TaskCount } from './components/TaskCount.js'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  text-align: center;
  height: calc(100vh - 100px);
`

const reducer = combineReducers({
  todos: todos.reducer
  // here we would have put our other reudcers if we would have had more than one
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <Header />
        <TaskInput />
        <TaskList />
      </Wrapper>
      <TaskCount />
    </Provider>
  )
}
