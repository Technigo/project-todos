import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
//import styled from 'styled-components'

import todos from './reducers/todos'

import AddTask from './components/AddTask'
import TaskList from './components/TaskList'
import Header from './components/Header'

/*
const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  border: none;
  border-radius: 10px;
  width: 300px;
  background-color: #e8f7f2;
  padding-bottom: 50px;
`*/

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
      <Provider store={store}>
    
      <Header />
      <AddTask />
      <TaskList />
   
    </Provider>
  )
}
