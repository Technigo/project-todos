import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'


const TaskSummary = styled.h4`
  font-size: 20px;
  margin: 16px;
  display: flex;
  justify-content: flex-end;
  `

export const ToDoSummary = () => {
  const list = useSelector(store => store.tasks.list)

  const tasksDone = list.items.filter(item => item.done).length

  return (
    <section>
      <TaskSummary> Done: {tasksDone}/{list.items.length}</TaskSummary>
    </section>
  )
}