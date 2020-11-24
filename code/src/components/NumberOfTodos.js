import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const NumberOfTodos = () => {
  const todoItems = useSelector((store) => store.todolist)
  return (
    <TaskCount>
      {todoItems.length} {todoItems.length === 1 ? "task" : "tasks"} to do
    </TaskCount>
  )
}
export default NumberOfTodos

const TaskCount = styled.div`
  color: #a8dadc;
  font-weight: 600;
  `