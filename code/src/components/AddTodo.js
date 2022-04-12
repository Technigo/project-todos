import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from "styled-components/macro"

import DatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCirclePlus } from '@fortawesome/free-regular-svg-icons'
// import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-regular-svg-icons'

import todos from 'reducers/todos'

// quebec flag blue: #003DA5
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
color: #003DA5;
`

const AddButton = styled.button`
  display: inline-block;
  border: none;
  padding: 0;
  background: transparent;
  color: #000;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;

  &:disabled {
    color: red;
  }
`

const AddInput = styled.input`
  border: 1px solid black;
  border-radius: 0;
  outline: none;

  &:focus {
    background-color: lightgrey;
  }
`

const AddTodo = () => {
  const dispatch = useDispatch()

  const [inputText, setInputText] = useState('')
  const [inputCategory, setInputCategory] = useState('')
  const [inputDeadline, setInputDeadline] = useState(new Date())
  const [timestamp, setTimestamp] = useState(Date.now)
  const [isDisabled, setIsDisabled] = useState(true)

  // if text entered and then deleted, would need to be back disabled and red (so I can remove "required")
  // it works now
  const onChangeInputText = (event) => {
    setInputText(event.target.value)
    setIsDisabled(!event.target.value)
    setTimestamp(Date.now)
  }

  const onChangeInputCategory = (event) => {
    setInputCategory(event.target.value)
    // ne fonctionne pas
    // setIsDisabled(!event.target.value)
  }

  const onChangeInputDeadline = (date) => {
    setInputDeadline(+new Date(date))
    // ne fonctionne pas
    // setIsDisabled(!event.target.value)
  }

  const onAddTodo = (event) => {
    event.preventDefault()
    dispatch(todos.actions.addTodo({ inputText, inputCategory, inputDeadline, timestamp }))
    setInputText('')
    setInputCategory('')
    setInputDeadline(new Date())
    setIsDisabled(true)
  }
  // minDate={new Date()}
  return (
    <form onSubmit={onAddTodo}>
      <p>
        <StyledFontAwesomeIcon icon={faEdit} />
        <AddInput required type="text" onChange={onChangeInputText} value={inputText}></AddInput>
      </p>
      <p>
        <label htmlFor="category" value="Choose a category"></label>
        <select required id="category" value={inputCategory} onChange={onChangeInputCategory}>
          <option value="" disabled>--Choose a category--</option>
          <option value="personal">Personal</option>
          <option value="school">School</option>
          <option value="work">Work</option>
        </select>
      </p>
      <DatePicker selected={inputDeadline} onChange={onChangeInputDeadline} dateFormat="dd.MM.yyyy" locale={'en'} >
        <div style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>Choose a deadline</div>
      </DatePicker>
      <AddButton type="submit" disabled={isDisabled}><FontAwesomeIcon icon={faPlus} /></AddButton>
      <hr></hr>
    </form>
  )
}

export default AddTodo
