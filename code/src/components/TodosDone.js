import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const TaskWrapper = styled.section`
  font-family: 'Shadows Into Light', cursive;
  font-size: 20px;
`

export const TodosDone = () => {
  const list = useSelector(store => store.todos.items)

  const listDone = list.filter(item => item.isComplete).length 

  return (
    <TaskWrapper>
      <h3>Tasks done: {listDone}/{list.length}</h3>
    </TaskWrapper>
  )
}
