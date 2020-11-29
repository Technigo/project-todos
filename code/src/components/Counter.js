import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"

export const Counter = () => {
  const tasks = useSelector(store => store.todos.allTodoTasks)

  //array of 1s or 0s
  const completedTasks = tasks.map(task => {
    return (task.complete ? 1 : 0)
  })

  //defining reducer for reduce function
  const reducer = (accumulator, currentValue) => {
    return accumulator + currentValue
  }

  const sum = completedTasks.reduce(reducer, 0)

  return (
    <div>
      {/* { tasks.length === 0 ? } */}
      <Text>{sum} of {tasks.length} completed</Text>
    </div>
  )
}

// --- STYLED COMPONENTS ---

const Text = styled.p`
  font-size: 14px;
  font-weight: bold;

  //-- tablet --
  @media (min-width: 677px) {
    font-size: 18px;
  }

  //-- desktop --
  @media (min-width: 1024px) {
    font-size: 24px;
  }
`