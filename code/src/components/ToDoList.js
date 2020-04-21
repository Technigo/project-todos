import React from 'react'
import { useSelector } from 'react-redux'
import styled, { css } from 'styled-components'
import { Task } from './Task'

const Text = styled.h1`
  background-color: lightyellow;

  &:hover {
    color: grey;
  }

  ${props => props.example && css`
  background-color: example;`}
`


export const ToDoList = () => {
  const allTasks = useSelector((store) => store.tasks)

  return (
    <>
    <Text>
      {allTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </Text>
    </>
  )
}