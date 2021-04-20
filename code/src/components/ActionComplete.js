import React from "react"
import { useDispatch } from "react-redux"
import styled from 'styled-components'

import { tasks } from "reducers/tasks"

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0;
`

const StyledParagraph = styled.p`
  padding: 0;
`

const Icon = styled.img`
  width: 16px;
`

export const ActionComplete = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    const completeAll = window.confirm("Are you sure you want to complete all tasks?")
    if (completeAll) {
      dispatch(tasks.actions.completeAllTasks())
    }
  }

  return (
    <StyledButton onClick={handleClick} >
      <StyledParagraph>Complete all</StyledParagraph>
      <Icon src="./assets/check-icon.svg" alt="check icon" />
    </StyledButton>
  )
}