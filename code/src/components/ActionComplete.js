import React from "react"
import { useDispatch } from "react-redux"
import styled from 'styled-components'

import { tasks } from "reducers/tasks"

const HeaderButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 12px;
  font-weight: 400;
  margin: 5px 0;
  border: 1px solid #8d8f96;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledParagraph = styled.p`
  padding: 0;
  margin: 0;
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
    <HeaderButton onClick={handleClick} >
      <StyledParagraph>Complete all</StyledParagraph>
      <Icon src="./assets/check-icon.svg" alt="check icon" />
    </HeaderButton>
  )
}