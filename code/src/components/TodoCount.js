import React from 'react'
import { useSelector } from 'react-redux'
import { todoList } from 'reducers/todoList'

export const TodoCount = () => {
  const unfinishedTasks = useSelector(state => state.todoList.tasks.filter(task => !task.isCompleted))
  const numberOfUnfinishedTasks = unfinishedTasks.length;
  return (
    <p>{numberOfUnfinishedTasks}</p>
  )
}