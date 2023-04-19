/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { toDos } from 'reducers/toDos'

export const AddToDo = () => {
  const [inputText, setInputText] = useState('')
  const dispatch = useDispatch()
  const onFormSubmit = (event) => {
    event.preventDefault()
    const newTodo = {
      id: Date.now().toString(),
      name: inputText,
      checked: false
    }

    dispatch(toDos.actions.addToDo(newTodo))
    setInputText('')
  }

  return (
    <Form onSubmit={onFormSubmit}>
      <label htmlFor="addTodoText">
        <InputField id="addTodoText" placeholder="Make it happen.." type="text" value={inputText} onChange={(event) => setInputText(event.target.value)} />
      </label>
      <MakeButton type="submit" disabled={!inputText}>+</MakeButton>
    </Form>
  )
}

const Form = styled.form`
display: flex;
gap: 16px;
`

const InputField = styled.input`
border: solid 2px #FF847C;
border-radius: 5px;
padding: 8px 20px;
font-size: 16px;
background-color: #c7b198;
outline-color: #9fe6dc;
}
`

const MakeButton = styled.button`
border: solid 2px #FF847C;
background-color: #c7b198;
color: #FF847C;
height: 36px;
width: 36px;
border-radius: 50%;
font-size: 30px;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;

&:hover {
  cursor: pointer;
  box-shadow: 1px 2px #665d47;
  transform: scale(1.1);

  &:disabled {
    opacity: 30%;
  }
}
`