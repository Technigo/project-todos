import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import styled, { createGlobalStyle } from 'styled-components'
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
      <GlobalStyle />
      <Main>
        <Header />
        <ListContainer>
          <AddToDo />
          <ToDoList />
        </ListContainer>
      </Main>
    </Provider>
  )
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: 'Courier New';
}
`

const Main = styled.main`
display: flex;
flex-direction: column;
align-items: center;
max-width: 500px;
justify-content: center;
background-color: black;
padding: 20px;
border: solid pink 3px;
`

const ListContainer = styled.section`
display:flex;
flex-direction: column;
align-self: stretch;
height: 100vw;
background-color: #c7b198;
padding: 40px 10px;
border-radius: 10px;
border: solid 3px green;
gap: 20px;
`