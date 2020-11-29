import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"

export const Counter = () => {

  const allTasks = useSelector(store => store.todoTasks.allTodoTasks).length

  return (
    <div>
      <Text> of {allTasks} completed</Text>
    </div>
  )
}

// --- STYLED COMPONENTS ---

const Text = styled.p`
  font-size: 14px;
  font-weight: bold;
`