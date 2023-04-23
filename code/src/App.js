import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { ToDoList } from 'components/ToDoList'
import { projects } from 'reducers/projects'
import { Header } from 'components/Header'
import { ProjectToDoList } from 'components/ProjectToDoList'
import { Wrapper, Main } from 'components/style/GlobalStyle'
import { tasks } from './reducers/tasks'

const reducer = combineReducers({
  tasks: tasks.reducer,
  projects: projects.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Provider store={store}>
          <ToDoList />
          <ProjectToDoList />
        </Provider>
      </Main>
    </Wrapper>
  )
}