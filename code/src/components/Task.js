import React from "react"
import { useDispatch } from "react-redux"
import styled from 'styled-components'
import dayjs from 'dayjs'

import { tasks } from "reducers/tasks"

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
`

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 5px 10px;
`
const Icon = styled.img`
  width: 24px;
`
const TaskTitle = styled.p`
  margin: 0 10px;
  font-size: 24px;
  font-weight: 600;
`

const TaskDueDate = styled.p`
  margin: 0 10px;
  font-size: 20px;
  font-weight: 600;
`

export const Task = ({ task }) => {
  const dispatch = useDispatch()

  return (
    <StyledDiv>
      {task.isCompleted &&
        <StyledButton onClick={() => dispatch(tasks.actions.toggleTask(task))}>
          <Icon src="./assets/check-icon.svg" alt="checked square icon" />
        </StyledButton >}
      {!task.isCompleted &&
        <StyledButton onClick={() => dispatch(tasks.actions.toggleTask(task))}>
          <Icon src="./assets/square-icon.svg" alt="empty square icon" />
        </StyledButton>}
      <TaskTitle>{task.title}</TaskTitle>
      {task.dueDate && <TaskDueDate>{dayjs(task.dueDate).format("D/M")}</TaskDueDate>}


      <StyledButton onClick={() => dispatch(tasks.actions.removeTask(task))} >
        <Icon src="./assets/bin-icon.svg" alt="bin icon" />
      </StyledButton>
    </StyledDiv>
  )
}