import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Container, Grid } from '@material-ui/core';

import todos from './reducers/todos'

import Header from './components/Header'
import TodoList from './components/TodoList'
import ClearTodo from './components/ClearTodo'
import AddNewTodo from './components/AddNewTodo'


const reducer = combineReducers({
  todos: todos.reducer
})


const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Container fixed style={{ backgroundColor: 'pink', width: '500px', height: '100vh' }}>
      <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
        >
        <Header />
        <AddNewTodo />
        <TodoList />
        <ClearTodo />
        </Grid>
      </Container>
    </Provider>
  )
}
