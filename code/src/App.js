import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import styled from 'styled-components'

import todos from 'reducers/todos'


import ListItem from 'components/ToDoList'
import AddToDo from 'components/AddToDo'
import Header from 'components/Header'

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({
  reducer: reducer
})

const AllComponents = styled.div`
border: 2px solid rgb(228, 221, 203);
padding-top: 40px;
min-height: 100vh;
border-radius: 70px 70px 0 0;
background-color: rgb(228, 221, 203);
`


export const App = () => {
  return (
    <Provider store={store}>
      <AllComponents>
      <Header />
      <AddToDo />
      <ListItem />
      </AllComponents>
    </Provider>
  )
}
