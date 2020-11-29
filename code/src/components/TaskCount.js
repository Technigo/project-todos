import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Text = styled.p`
  text-align: center;
`

export const TaskCount = () => {

  const tasks = useSelector(store => store.todos.tasks)

  return (
    <Text>You have completed {tasks.filter(task => task.isComplete === true).length} out of {tasks.length}, {tasks.filter(task => task.isComplete === false).length} more to go!</Text>
  )
}