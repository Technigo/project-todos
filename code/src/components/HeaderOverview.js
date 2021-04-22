import React from "react"
import { useSelector } from "react-redux"
import styled from 'styled-components'
import dayjs from 'dayjs'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'

dayjs.extend(isSameOrBefore)

const StyledDiv = styled.div`
  border: 1px solid #8d8f96;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledParagraph = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 14px;
`

const HeaderOverview = () => {
  const tasks = useSelector(store => store.tasks.allTasks)

  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.isCompleted).length

  const dueSoonTasks = tasks.filter(task => !dayjs(task.dueDate).isSameOrBefore(new Date())).length

  const overdueTasks = tasks.filter(task => dayjs(task.dueDate).isSameOrBefore(new Date())).length

  return (
    <StyledDiv>
      <StyledParagraph>{completedTasks} of {totalTasks} completed</StyledParagraph>
      <StyledParagraph>{dueSoonTasks} of {totalTasks} due soon</StyledParagraph>
      <StyledParagraph>{overdueTasks} of {totalTasks} overdue</StyledParagraph>
    </StyledDiv>
  )
}

export default HeaderOverview
