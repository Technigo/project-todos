import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import ReactDOM from 'react-dom';
import { Box, Container, ThemeProvider } from '@material-ui/core';

import todoList from './reducers/todoList'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import TaskStats from './components/TaskStats'
import theme from './theme'

//TO-DO huhhuehueh META:
//[_] Remember to do an ACTION on github for pull requests (see friday lecture for how to)


const reducer = combineReducers({
  //all SLICES are combined into one for convenience!! :D
  todolist: todoList.reducer
})

//This puts the contents of our reducers into a store object
const store = configureStore({ reducer })

export const App = () => {
  return (
    //so THIS is where the actual store gets assigned, huh?
    <Provider store={store}>
      <ThemeProvider
        theme={theme}
      >
        <Container maxWidth="sm">
          <TaskForm />
          <TaskList />
          <TaskStats />
        </Container>
      </ThemeProvider>
    </Provider>
  )
}
