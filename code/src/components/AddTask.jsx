import React, { useState } from "react"
import { useDispatch } from "react-redux"
import uniqid from "uniqid"
import styled from "styled-components"

import todos from "../reducers/todos"

const StyledForm = styled.form`
  width: 100%;
  box-sizing: border-box;
`

const TextInput = styled.input`
  border: none;
  border-bottom: 2px dotted #2C2E73;
  padding: 10px;
  color: #2C2E73;
  font-family: "WrittenLies";
  font-size: 20px;
  width: 80%;
`

const AddButton = styled.button`
  background: transparent;
  border-radius: 20px;
  border: 2px solid #2C2E73;
  font-size: 20px;
  color: #2C2E73;
  margin-left: 10px;
  &:hover {
    background: #A3A5D8;
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
      />
      <AddButton type="submit">
        +
      </AddButton>
    </StyledForm>
  )
}

export default AddTask