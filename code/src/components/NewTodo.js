/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import todo from 'reducers/todo'
import styled from 'styled-components'
import { Section } from './styling/Wrappers'

const NewTodo = () => {
  const dispatch = useDispatch()
  const [newTodo, setNewTodo] = useState('')

  const onFormSubmit = (event) => {
    event.preventDefault()
    const postNewTodo = {
      name: newTodo,
      isCompleted: false
    }
    dispatch(todo.actions.addItem(postNewTodo))
    setNewTodo('')
  }

  return (
    <Section>
      <form onSubmit={onFormSubmit}>
        <LabelWrapper>
          <p>New Todo</p>
          <InputField type="text" value={newTodo} onChange={(event) => setNewTodo(event.target.value)} />
          <AddButton type="submit">Add Todo</AddButton>
        </LabelWrapper>
      </form>
    </Section>
  )
}

const LabelWrapper = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 30px;
  padding: 5px;
  border: #F090D9 solid 2px;
  p{
    font-weight: 700;
    font-size: 20px;
    margin-right: 5px;
  }
`
const AddButton = styled.button`
    width: 125px;
    height: 30px;
    background-color: #F090D9;
    color: white;
    border: none;
    border-radius: 8px;
    font-family: unset;
    margin: 10px;
    text-transform: lowercase;
    font-weight: 700;
`
const InputField = styled.input`
    width: 225px;
    height: 25px;
    border: none;
    margin: 5px;
`

export default NewTodo