import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Header from 'components/Header';
import TaskList from 'components/TaskList';
import TaskInput from 'components/TaskInput';

const TaskListPage = () => {
  return (
    <>
      <Header />
      <TaskList />
      <TaskInput />
    </>
  );
};

export default () => {
  return (
    <Container component="main" maxWidth="sm">
      <Switch>
        <Route exact path="/projects/:slug">
          <TaskListPage />
        </Route>
        <Route exact path="/">
          <TaskListPage />
        </Route>
        {/* If user tries to go to a route that is non-existent we redirect to main page */}
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Container>
  );
};
