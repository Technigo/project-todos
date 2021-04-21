import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core'
import Header from 'components/Header'
import TaskList from 'components/TaskList'
import TaskInput from 'components/TaskInput'

export default () => {
  return (
    <Container component="main" maxWidth="sm">
      <Switch>
        <Route exact path="/projects/:slug">
          <Header />
          <TaskList />
          <TaskInput />
        </Route>
        <Route exact path="/">
          <Header />
          <TaskList />
          <TaskInput />
        </Route>
      </Switch>
    </Container>
  )
}