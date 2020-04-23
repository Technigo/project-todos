import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled, { css } from 'styled-components'
import { Task } from './Task'
import { AddTask } from './AddTask'


export const ToDoList = () => {
  const list = useSelector(store => store.tasks.list)

  return (
    <div>
      <AddTask />
        {list.items.map((item, index) => (
          <Task key={index} item={item} itemIndex={index} />
      ))}     
    </div>
  )
}

const Text = styled.h1`
  background-color: lightyellow;

  &:hover {
    color: grey;
  }

  ${props => props.example && css`
  background-color: example;`}
`
