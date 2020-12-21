import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import styled from 'styled-components'

import { Task } from './Task'

export const TaskList = () => {

  const items = useSelector((store) => store.tasks.items)
  
  return (
    <>
      {items.map((item) => (
        <Task
          key={item.id}
          item={item}
        />
      ))}
    </>
  )
}

const Text = styled.p`
  font-size: 40px;
  font-weight: bold;
  font-family: 'Acme', sans-serif;
`
const Date = styled.p`
  font-size: 25px;
  margin-left: 25px;
  font-family: 'Roboto Mono', monospace;
`




