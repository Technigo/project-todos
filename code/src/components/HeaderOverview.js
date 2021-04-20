import React from "react"
import { useSelector } from "react-redux"
import styled from 'styled-components'

const StyledParagraph = styled.p`
  margin: 0;
`

export const HeaderOverview = () => {
  const tasks = useSelector(store => store.tasks.allTasks)

  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.isCompleted).length

  return (
    <StyledParagraph>{completedTasks}/{totalTasks} completed</StyledParagraph>
  )
}