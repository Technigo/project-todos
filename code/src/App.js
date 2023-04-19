import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import styled from 'styled-components'
import { toDos } from 'reducers/toDos'
import { AddToDo } from 'components/AddToDo'
import { ToDoList } from 'components/ToDoList'
import { Header } from 'Header'

const reducer = combineReducers({
  toDos: toDos.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Main>
        <Header />
        <ToDoList />
        <AddToDo />
      </Main>
    </Provider>
  )
}

const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #c7b198; 
gap: 20px;
`
