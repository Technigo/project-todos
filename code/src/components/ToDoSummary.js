import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Task } from './Task'
import { tasks } from '../reducers/tasks'

export const ToDoSummary = () => {
  const list = useSelector(store => store.tasks.list)
  
  const tasksDone = list.items.filter(item => item.done).length

  return (
    <section>
      <h4> {tasksDone}/{list.items.length}</h4>
    </section>
  )
}