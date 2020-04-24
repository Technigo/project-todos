import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from '@reduxjs/toolkit'
import { TaskList } from 'components/TaskList'
import { AddTask } from 'components/AddTask'
import { Header } from 'components/Header'
import styled from "styled-components";


import { tasks } from 'reducers/tasks'
// another reducer 

const reducer = combineReducers({
  tasks: tasks.reducer
})

// Retrieve localstorage as initial state
const persistedStateJSON = localStorage.getItem('todosReduxState')
let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

// Create store with initial state
const store = createStore(
  reducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// Store the state in localstorage on Redux state change
store.subscribe(() => {
  localStorage.setItem('todosReduxState', JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <div>
      <Provider store={store} >
        <Wrapper>
          <Header />
          <AddTask />
          <TaskList />
        </Wrapper>
      </Provider>
    </div>
  )
}


const Wrapper = styled.section`
  margin-left: 50px;
`;