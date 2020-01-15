import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoList } from 'reducers/todoList'
import "./taskList.css"
import { Task } from 'components/Task'

export const TaskList = ({ task }) => {
  const allTasks = useSelector(state => state.todoList.tasks)
  const dispatch = useDispatch()
  console.log(allTasks)
  return (
    <ul className="task-list">
      {allTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </ul >
  )
}