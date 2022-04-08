import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCirclePlus } from '@fortawesome/free-regular-svg-icons'
// import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


import { todos } from 'reducers/todos'

const AddButton = styled.button`
  display: inline-block;
  border: none;
  padding: 0;
  background: transparent;
  color: #000;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;

  /* &:disabled {
    opacity: 0.5;
  } */
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

  const [input, setInput] = useState('')

  const onChangeInput = (event) => {
    setInput(event.target.value)
  }

  // const isDisabled = () => {
  //   if (input === '') {
  //     return 'true'
  //   } else {
  //     return 'false'
  //   }
  // }

  const onAddTodo = (event) => {
    event.preventDefault()
    dispatch(todos.actions.addTodo(input))
    setInput('')
  }

  return (
    <form onSubmit={onAddTodo}>
      <AddInput required type="text" onChange={onChangeInput} value={input}></AddInput>
      <AddButton type="submit"><FontAwesomeIcon icon={faPlus} /></AddButton>
    </form>
  )
}