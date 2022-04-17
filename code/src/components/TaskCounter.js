import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Counter = styled.p`
  font-size: 12px;
  font-weight: bolder;
  text-align: center;
`

const TaskCounter = () => {
  const uncompleteTaskCounter = useSelector((state) =>
    state.todos.items.filter((todoItem) => todoItem.isDone === false),
  )
  return <Counter>You have {uncompleteTaskCounter.length} todos</Counter>
}

export default TaskCounter
