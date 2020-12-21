import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const TaskCount = () => {

  const todos = useSelector((store) => store.tasks.items);
  const todosCompleted = todos.filter((todo) => todo.complete);

  return (
    <Text> Completed: {todosCompleted.length} / {todos.length}</Text>
  )
}

const Text = styled.p`
  text-align: center;
  font-family: 'Roboto Mono', monospace;
  font-size: 15px
`