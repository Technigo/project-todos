import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { tasks } from "./reducers/tasks";


import Header from 'components/Header'
import AddTasks from 'components/AddTasks'
import TaskList from 'components/TaskList'

import { GlobalStyles } from "components/styles/Global";
import {  Border } from 'components/styles/Containers.styled'

const reducer = combineReducers({
  tasks: tasks.reducer
});

const store = configureStore({ reducer});

export const App = () => {
  return (
    <Provider store={store}>
      <main>
        <Border>
          <GlobalStyles />
          <Header />
          <AddTasks />
          <TaskList />
        </Border>
        <footer> <p>Created by : <a href='https://github.com/rawisou'> Rawisara Saman</a></p></footer>
      </main>
    </Provider>
  )
}
