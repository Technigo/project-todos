import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import styled from 'styled-components'

import { tasks } from "reducers/tasks"

const StyledSection = styled.section`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin-top: auto;
`

const StyledButton = styled.button`
border: none;
background-color: transparent;
display: flex;
align-items: center;
padding: 0;
`

const Icon = styled.img`
width: 24px;
`

const StyledParagraph = styled.p`
margin: 0 0 0 10px;
`

const StyledInput = styled.input`
width: 100 %;
box-sizing: border - box;
margin: 20px 0;
padding: 10px;
font-size: 20px;
`

export const AddContainer = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [newTask, setNewTask] = useState("")

  const dispatch = useDispatch()

  const handleClick = () => {
    setIsClicked(prevState => !prevState)
  }

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(tasks.actions.addTask(newTask))
    setNewTask("")
  }

  return (
    <StyledSection>
      <StyledButton onClick={handleClick}>
        <Icon src="./assets/plus-icon.svg" alt="plus icon" />
        <StyledParagraph>Add task</StyledParagraph>
      </StyledButton>

      {isClicked &&
        <form onSubmit={handleSubmit}>
          <StyledInput type="text" value={newTask} onChange={handleChange} />
          <StyledButton onClick={handleSubmit} >
            <Icon src="./assets/add-icon.svg" alt="add icon" />
            <StyledParagraph>Add to list</StyledParagraph>
          </StyledButton>
        </form>
      }
    </StyledSection>
  )
}