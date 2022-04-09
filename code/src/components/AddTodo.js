import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from "styled-components/macro"
// import moment from 'moment'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCirclePlus } from '@fortawesome/free-regular-svg-icons'
// import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-regular-svg-icons'


import { todos } from 'reducers/todos'

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
  border: none;
  border-bottom: 1px solid black;
  outline: none;

  &:focus {
    background-color: lightgrey;
  }
`

export const AddTodo = () => {
  const dispatch = useDispatch()

  const [inputText, setInputText] = useState('')
  const [inputCategory, setInputCategory] = useState('')

  const [isDisabled, setIsDisabled] = useState(true)

  // maybe this way to add a timestamp? what should be between () ???
  // const [timestamp, setTimestamp] = useState('')

  // if text entered and then deleted, would need to be back disabled and red (so I can remove "required")
  // it works now
  const onChangeInputText = (event) => {
    setInputText(event.target.value)
    console.log(inputText)
    setIsDisabled(!event.target.value)
  }

  const onChangeInputCategory = (event) => {
    setInputCategory(event.target.value)
    console.log(event.target.value)
    console.log(inputCategory)
    setIsDisabled(!event.target.value)
  }

  // timestamp state not updated... how to do it?
  const onAddTodo = (event) => {
    event.preventDefault()
    // should add timestamp as well in dispatch between ()
    dispatch(todos.actions.addTodo(inputText, inputCategory))
    setInputText('')
    setInputCategory('')
    setIsDisabled(true)
    // setTimestamp(moment().format('dddd, h:mm a'))
    // console.log(moment().format('dddd, h:mm a'))
    // console.log(timestamp)
  }

  return (
    <form onSubmit={onAddTodo}>
      <StyledFontAwesomeIcon icon={faEdit} />
      <AddInput required type="text" onChange={onChangeInputText} value={inputText}></AddInput>
      <label htmlFor="category">Choose a category:</label>
      <select id="category" value={inputCategory} onChange={onChangeInputCategory} required>
        <option value="" disabled>--Please choose an option--</option>
        <option value="home">Home</option>
        <option value="work">Work</option>
      </select>
      <AddButton type="submit" disabled={isDisabled}><FontAwesomeIcon icon={faPlus} /></AddButton>
    </form>
  )
}