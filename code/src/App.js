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
  width: 50%;
  margin: 0 auto;
  border: 1px solid teal;
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
