import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import styled from 'styled-components'

import { tasks } from './reducers/tasks'
import { account } from './reducers/account'
import TodoList from './components/TodoList'
import Header from './components/Header'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const reducer = combineReducers({
  tasks: tasks.reducer,
  account: account.reducer
})

const store = configureStore({ reducer: reducer})

export const App = () => {
  return (
    <Provider store={store}>
      <Main>
        <Header />
        <TodoList />
      </Main>
    </Provider>
  )
}
