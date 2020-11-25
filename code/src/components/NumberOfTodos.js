import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const NumberOfTodos = () => {
  const todoItems = useSelector((store) => store.todolist.list)
  const completedTasks = todoItems.filter((item) => item.isCompleted === true)
  const remainedTasks = todoItems.filter((item) => item.isCompleted === false)

  return (
    <TaskCount>
      <p>{completedTasks.length}  completed {completedTasks.length === 1 ? "task" : "tasks"}</p>
      <p>{remainedTasks.length} {remainedTasks.length === 1 ? "task" : "tasks"} left to do</p>
    </TaskCount>
  )
}
export default NumberOfTodos

const TaskCount = styled.div`
  color: #a8dadc;
  display: flex
  font-weight: 600;
  `