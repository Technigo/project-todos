import React from "react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import styled from 'styled-components'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import { tasks } from "reducers/tasks"

const StyledSection = styled.section`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin-top: auto;
  box-shadow: 0 0 10px #8d8f96;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const StyledInput = styled.input`
width: 100 %;
box-sizing: border - box;
padding: 10px;
font-size: 20px;
`

export const AddContainer = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [newTask, setNewTask] = useState("")
  const [dueDate, setDueDate] = useState(null)

  const dispatch = useDispatch()

  const handleClick = () => {
    setIsClicked(prevState => !prevState)
  }

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const handleDateChange = (event) => {
    setDueDate(event)
    console.log(dueDate)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask) {
      dispatch(tasks.actions.addTask(newTask, dueDate))
      setNewTask("")
      setDueDate(null)
    }
  }

  return (
    <StyledSection>
      <StyledButton onClick={handleClick}>
        <Icon src="./assets/plus-icon.svg" alt="plus icon" />
        <StyledParagraph>Add task</StyledParagraph>
      </StyledButton>

      {isClicked &&
        <Form onSubmit={handleSubmit}>
          <label htmlFor="textinput">
            Your task (required)
            </label>
          <StyledInput
            type="text"
            value={newTask}
            onChange={handleChange}
            id="textinput"
          />
          <label htmlFor="datepicker">
            Due date (optional)
            </label>
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={dueDate}
            onChange={handleDateChange}
            id="datepicker"
          />
          <StyledButton onClick={handleSubmit} >
            <Icon src="./assets/add-icon.svg" alt="add icon" />
            <StyledParagraph>Add to list</StyledParagraph>
          </StyledButton>
        </Form>
      }
    </StyledSection>
  )
}