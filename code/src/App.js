import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import styled from 'styled-components'

import { tasks } from './reducers/tasks'
import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import { TaskList } from './components/TaskList'


const reducer = combineReducers({
  tasks: tasks.reducer
})

const persistedStateJSON = localStorage.getItem("localStorageTodo")
let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

const store = createStore(
  reducer,
  persistedState
)

store.subscribe(() => {
  localStorage.setItem("localStorageTodo", JSON.stringify(store.getState()))
})

const Container = styled.div`
  margin: auto;
  width: 400px;
  max-width: 80%;
`

export const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Header />
        <AddTask />
        <TaskList />
      </Container>
    </Provider>
  )
}

