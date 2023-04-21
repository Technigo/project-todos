// src/App.js
import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { projects } from 'reducers/projects'
import styled from 'styled-components';
import AddTask from './components/AddTask'
import { tasks } from './reducers/tasks'
import TaskList from './components/TaskList'
import AddProject from './components/AddProject'
import ProjectList from './components/ProjectList'
import TaskCounter from './components/TaskCounter'
import CompleteAllButton from './components/CompleteAllButton'
import Playlist from './components/Playlist';
import { playlist } from './reducers/playlist';

const reducer = combineReducers({
  tasks: tasks.reducer,
  projects: projects.reducer,
  playlist: playlist.reducer
})

const store = configureStore({ reducer })

const AppWrapper = styled.div`
 display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 5px 20px;
gap:1rem;
border-radius: 10px;
background-color: #0f1029;

`;

export const App = () => {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Playlist />
        <img src={`${process.env.PUBLIC_URL}/lofigirl.gif`} alt="lofi girl gif" />
        <h2>Projects</h2>
        <AddProject />
        <ProjectList />
        <AddTask />
        <TaskList />
        <CompleteAllButton />
        <TaskCounter />
      </AppWrapper>
    </Provider>
  )
}
