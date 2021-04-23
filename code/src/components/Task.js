import React from "react"
import { useDispatch } from "react-redux"
import styled from 'styled-components'
import dayjs from 'dayjs'

import tasks from "reducers/tasks"

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
`

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 5px 10px;
  display: flex;

`
const Icon = styled.img`
  width: 24px;
  cursor: pointer;
`
const IconBin = styled.img`
  width: 20px;
  cursor: pointer;
`
const TaskTitle = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
`

const TaskDueDate = styled.p`
  margin: 0 10px;
  font-size: 14px;
  font-weight: 600;
`

const Task = ({ task }) => {
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
        <IconBin src="./assets/bin-icon.svg" alt="bin icon" />
      </StyledButton>
    </StyledDiv>
  )
}

export default Task