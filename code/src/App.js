import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todos from './reducers/todos'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import RemoveAllTodos from './components/RemoveAllTodos'
import NumberofTodos from './components/NumberofTodos'
import styled from 'styled-components'

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore ({ reducer })

export const App = () => {
  return (
    <Main>
    <Provider store={store}>
      <Header/>
      <AddTodo/>
      <TodoList/>
      <NumberofTodos/>
      <RemoveAllTodos/>
    </Provider>
    </Main>
  )
}

const Main = styled.div`
width: 330px;
margin: 10px;
display: flex;
flex-direction: column;
text-align: center;
justify-content: flex-start;
background-color: #254e58;
padding: 5px;
border-radius: 10px;

font-family: "Inconsolata", monospace;
font-size: 14px;
box-sizing: border-box;

@media (min-width: 767px) {
  width: 400px;
  margin: 70px 0px;
  padding: 20px 20px;
  font-size: 16px;
}
  `
