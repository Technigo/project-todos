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
    <section>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="addTodoText">
          <input id="addTodoText" type="text" value={inputText} onChange={(event) => setInputText(event.target.value)} />
        </label>
        <MakeButton type="submit" disabled={!inputText}>Make it happen</MakeButton>
      </form>
    </section>
  )
}

const MakeButton = styled.button`
border: none;
border-radius: 12px;
padding: 5px 10px;
font-family: 'Courier New';

`