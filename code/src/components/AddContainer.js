import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { nanoid } from '@reduxjs/toolkit'
import styled from 'styled-components'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import tasks from "reducers/tasks"

const StyledSection = styled.section`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin-top: auto;
  box-shadow: 
  -6px 0  transparent,
  6px 0 transparent,
  0 -7px 10px -9px #8d8f96;
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

const AddContainer = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [newTaskTitle, setNewTaskTitle] = useState("")
  const [dueDate, setDueDate] = useState(null)

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(dueDate)
    console.log(dueDate.toJSON())

    if (newTaskTitle) {

      const newTask = {
        id: nanoid(),
        title: newTaskTitle,
        isCompleted: false,
        isHidden: false,
        dueDate: dueDate.toJSON()
      }
      console.log(newTask.dueDate)

      dispatch(tasks.actions.addTask(newTask))
      setNewTaskTitle("")
      setDueDate(null)
    }
  }

  return (
    <StyledSection>
      <StyledButton onClick={() => setIsClicked(prevState => !prevState)}>
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
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            id="textinput"
          />
          <label htmlFor="datepicker">
            Due date (optional)
            </label>
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={dueDate}
            onChange={(e) => setDueDate(e)}
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

export default AddContainer
