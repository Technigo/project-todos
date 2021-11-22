import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import 'react-datepicker/dist/react-datepicker.css'

import { todos } from '../reducers/todos'

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  width: 100%;
  border-top: 1px solid rgb(244, 244, 244);
  padding: 0 5px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 05);
  margin-top: auto;
`
const Input = styled.input`
  flex-grow: 1;
  height: 60px;
  border: 0;
  font-size: 5rem;
`
const Button = styled.button`
  margin: 5px;
  height: 2rem;
  width: 2rem;
  font-size: 2rem;
  text-align: center;
  border-radius: 10px;
  border: 0;
  color: black;
`

export const AddSubTask = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  const onAddSubTask = e => {
    dispatch(todos.actions.addSubTask(input))
    setInput('')
    e.target.blur()
    dispatch(todos.actions.setIsChanged(true))
  }

  const onKeyDown = e => {
    if (e.key === 'Enter') {
      onAddSubTask(e)
    }
  }

  return (
    <InputWrapper>
      <Button disabled={input <= 0} onClick={onAddSubTask}>
        +
      </Button>
      <Input
        type='text'
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={onKeyDown}
      />
    </InputWrapper>
  )
}
