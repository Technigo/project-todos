import React from "react"
import { useSelector } from "react-redux"
import styled from 'styled-components'
import dayjs from 'dayjs'

const StyledParagraph = styled.p`
  margin: 0;
`

const HeaderOverview = () => {
  const tasks = useSelector(store => store.tasks.allTasks)

  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.isCompleted).length

  const dueSoonTasks = tasks.filter(task => dayjs(task.dueDate).diff(new Date(), "hour") > 0).length // checks if due date is before now
  const overdueTasks = tasks.filter(task => dayjs(new Date()).diff(dayjs(task.dueDate), "hour") > 0).length // checks if due date is after now

  return (
    <>
      <StyledParagraph>{completedTasks}/{totalTasks} completed</StyledParagraph>
      <StyledParagraph>{dueSoonTasks}/{totalTasks} due soon</StyledParagraph>
      <StyledParagraph>{overdueTasks}/{totalTasks} overdue</StyledParagraph>
    </>
  )
}

export default HeaderOverview
