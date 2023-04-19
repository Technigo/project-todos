// src/App.js
import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { projects } from 'reducers/projects'
import AddTask from './components/AddTask'
import { tasks } from './reducers/tasks'
import TaskList from './components/TaskList'
import AddProject from './components/AddProject'
import ProjectList from './components/ProjectList'
import TaskCounter from './components/TaskCounter'
import CompleteAllButton from './components/CompleteAllButton'

const reducer = combineReducers({
  tasks: tasks.reducer,
  projects: projects.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <h2>Projects</h2>
      <AddProject />
      <ProjectList />
      <AddTask />
      <TaskList />
      <CompleteAllButton />
      <TaskCounter />
    </Provider>
  )
}
