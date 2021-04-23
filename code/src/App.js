import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { tasks } from 'reducers/tasks'
import { TaskListView } from 'components/TaskListView'
import { NewTaskForm } from 'components/NewTaskForm'
import { Header } from 'components/Header'
import { CompletedTasks } from 'components/CompletedTasks'
import styled from 'styled-components'

const reducer = combineReducers({
  tasks: tasks.reducer
})

const store = configureStore({ reducer })

const AppSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #E8E8DD;
  height: 100vh;
  width: 100vw;
`

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppSection>
          <Header />
          <Switch>
            <Route path='/' exact>
              <TaskListView />
              <NewTaskForm />
              <CompletedTasks />
            </Route>
          </Switch>
        </AppSection>
      </BrowserRouter>
    </Provider>
  )
}
