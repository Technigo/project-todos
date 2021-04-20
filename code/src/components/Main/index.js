import React from 'react'
import { Container } from '@material-ui/core'
import Header from 'components/Header'
import TaskList from 'components/TaskList'
import TaskInput from 'components/TaskInput'

export default () => {
  return (
    <Container component="main" maxWidth="sm">
      <Header />
      <TaskList />
      <TaskInput />
    </Container>
  )
}