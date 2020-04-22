import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Task } from './Task'
import { tasks } from '../reducers/tasks'

const TaskSummary = styled.h4`
  font-size: 30px;
  `

export const ToDoSummary = () => {
  const list = useSelector(store => store.tasks.list)
  
  const tasksDone = list.items.filter(item => item.done).length

  return (
    <section>
      <TaskSummary> {tasksDone}/{list.items.length}</TaskSummary>
    </section>
  )
}