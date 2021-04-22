import React from "react"
import { useSelector } from "react-redux"
import styled from 'styled-components'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

dayjs.extend(isSameOrBefore)

const StyledParagraph = styled.p`
  margin: 0;
`

const HeaderOverview = () => {
  const tasks = useSelector(store => store.tasks.allTasks)

  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.isCompleted).length

  const dueSoonTasks = tasks.filter(task => !dayjs(task.dueDate).isSameOrBefore(new Date())).length

  const overdueTasks = tasks.filter(task => dayjs(task.dueDate).isSameOrBefore(new Date())).length

  return (
    <>
      <StyledParagraph>{completedTasks}/{totalTasks} completed</StyledParagraph>
      <StyledParagraph>{dueSoonTasks}/{totalTasks} due soon</StyledParagraph>
      <StyledParagraph>{overdueTasks}/{totalTasks} overdue</StyledParagraph>
    </>
  )
}

export default HeaderOverview
