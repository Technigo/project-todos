import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from "styled-components/macro"
import uniqid from 'uniqid'


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
  const [inputCategory, setInputCategory] = useState('personal')
  const [inputDeadline, setInputDeadline] = useState(null)
  const [timestamp, setTimestamp] = useState(Date.now)
  const [isDisabled, setIsDisabled] = useState(true)

  // if text entered and then deleted, would need to be back disabled and red (so I can remove "required")
  // it works now
  const onChangeInputText = (e) => {
    setInputText(e.target.value)
    setIsDisabled(!e.target.value)
    setTimestamp(Date.now)
  }

  const onChangeInputCategory = (e) => {
    setInputCategory(e.target.value)
  }

  const onChangeInputDeadline = (date) => {
    setInputDeadline(+new Date(date))
  }

  const onAddTodo = (e) => {
    e.preventDefault()
    const newTodo = {
      id: uniqid(),
      text: inputText,
      category: inputCategory,
      deadline: inputDeadline,
      timestamp: timestamp,
      completed: false
    }
    dispatch(todos.actions.addTodo(newTodo))
    setInputText('')
    setInputCategory('personal')
    setInputDeadline(null)
    setIsDisabled(true)
  }

  return (
    <form onSubmit={onAddTodo}>
      <p>
        <StyledFontAwesomeIcon icon={faEdit} />
        <AddInput required type="text" onChange={onChangeInputText} value={inputText}></AddInput>
      </p>
      <p>
        <label htmlFor="category" value="Choose a category"></label>
        <select id="category" value={inputCategory} onChange={onChangeInputCategory}>
          {/* <option value="" disabled>--Choose a category--</option> */}
          <option value="personal">Personal</option>
          <option value="school">School</option>
          <option value="work">Work</option>
        </select>
      </p>
      <DatePicker selected={inputDeadline} onChange={onChangeInputDeadline} dateFormat="dd.MM.yyyy" locale={'en'} minDate={new Date()}>
        <div style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>Choose a deadline</div>
      </DatePicker>
      <AddButton type="submit" disabled={isDisabled}><FontAwesomeIcon icon={faPlus} /></AddButton>
      <hr></hr>
    </form>
  )
}

export default AddTodo
