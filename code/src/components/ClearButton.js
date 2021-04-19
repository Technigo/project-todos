import React from "react"
import { useDispatch } from "react-redux"
import styled from 'styled-components'

import { tasks } from "reducers/tasks"

const StyledButton = styled.button`
@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
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

  const handleClick = () => {
    const deleteAll = window.confirm("Are you sure you want to delete all tasks?")
    if (deleteAll) {
      dispatch(tasks.actions.removeTask())
    }
  }

  return (
    <StyledButton onClick={handleClick} >
      <StyledParagraph>Delete all</StyledParagraph>
      <Icon src="./assets/bin-icon.svg" alt="bin icon" />
    </StyledButton>
  )
}