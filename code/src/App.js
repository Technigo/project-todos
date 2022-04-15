import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import styled from 'styled-components'

import todos from 'reducers/todos'


import ListItem from 'components/ToDoList'
import AddToDo from 'components/AddToDo'
import Header from 'components/Header'
import TasksCounter from 'components/TasksCounter'

const reducer = combineReducers({
  todos: todos.reducer
})

const store = configureStore({
  reducer: reducer
})

const Main = styled.main`
display: flex;
justify-content: center;
`

const AllComponents = styled.div`
padding-top: 40px;
min-height: 100vh;
border-radius: 70px 70px 0 0;
background-color: rgb(228, 221, 203);

@media (min-width: 768px) {
  width: 70vw;
  margin-top: 20px;
  align-items: center;
  padding: 40px 60px 0 60px;

}

@media (min-width: 992px) {
  width: 75vw;
}
`


export const App = () => {
  return (
    <Provider store={store}>
      <Main>
      <AllComponents>
      <Header />
      <AddToDo />
      <TasksCounter />
      <ListItem />
      </AllComponents>
      </Main>
    </Provider>
  )
}
