import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import styled from 'styled-components/macro'

import todos from 'reducers/todos'

import Header from 'components/Header'
import AddNewToDo from 'components/AddNewToDo'
import ToDoList from 'components/ToDoList'
import Footer from 'components/Footer'

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({ reducer })

const StyledAppcontainer = styled.div`
  width: 375px;
  margin: 10px auto;
  background-color: white;
  box-shadow: 0 10px 36px 0 rgba(0,0,0,.16),0 0 0 1px rgba(0,0,0,.06);
  border: 0.5px solid teal;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 500px;
  }

`

export const App = () => {
  return (
    <Provider store={store}>
      <StyledAppcontainer>
        <Header />
        <main>
          <AddNewToDo />
          <ToDoList />
        </main>
        <Footer />
      </StyledAppcontainer>
    </Provider>
  )
}
