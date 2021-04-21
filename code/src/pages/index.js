import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core'
import Header from 'components/Header'
import MyDay from './MyDay'
import Settings from './Settings'

export default () => {
  return (
    <Container component="main" maxWidth="sm">
      <Header />
      <Switch>
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/" component={MyDay} />
      </Switch>
    </Container>
  )
}