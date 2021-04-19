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
  width: 24px;
`

export const ClearButton = () => {
  const dispatch = useDispatch()
  return (
    <StyledButton onClick={() => dispatch(tasks.actions.removeTask())} >
      <StyledParagraph>Clear all</StyledParagraph>
      <Icon src="./assets/bin-icon.svg" alt="bin icon" />
    </StyledButton>
  )
}