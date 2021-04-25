import React, { useState } from "react"
import { useDispatch } from "react-redux"
import uniqid from "uniqid"
import styled from "styled-components"

import todos from "../reducers/todos"

//Styled components
const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: solid #2C2E73;
  border-width: 0px 0px 2px 0px;
  border-radius: 5% 0% 40% 0%/2% 0% 10% 0%;
  transform: rotate(1deg);
  margin: 10px 10px 0px 10px;
  width: 90%;

  @media (min-width: 420px) {
    width: 85%;
  }
  `
  
  const TextInput = styled.input`
  border: none;
  background: #FDF4C9;
  padding: 10px;
  color: #2C2E73;
  font-family: "WrittenLies";
  font-size: 20px;
  width: 80%;
`

const AddButton = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  padding: 5px;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`

const AddTask = () => {
  const [value, setValue] = useState("")

  const dispatch = useDispatch()

  const onFormSubmit = (e) => {
    e.preventDefault()
    const newTask = {
      id: uniqid(),
      description: value,
      isComplete: false, 
    }

    dispatch(todos.actions.addTask(newTask))
    setValue("")
  }

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <TextInput
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        aria-label="text input"
        required
      />
      <AddButton type="submit">
        <span role="img" alt="plus sign" aria-label="plus sign icon">➕</span>
      </AddButton>
    </StyledForm>
  )
}

export default AddTask