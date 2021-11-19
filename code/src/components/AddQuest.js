import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import quests from '../reducers/quests'

const AddQuestStyled = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;

  button {
    font-family: 'Cantarell', sans-serif;
    margin-left: 4px;
    border: none;
    border-radius: 6px;
    background-color: #012f66;
    color: #f5f9fb;
    font-weight: 700;
    padding: 0.5rem 1rem;
  }

  input {
    font-family: 'Cantarell', sans-serif;
    border: 2px solid #fedd00;
    border-radius: 6px;
  }
`

const AddQuest = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const onAddTask = () => {
    dispatch(quests.actions.addQuest(input))
    // empty the text field
    setInput('')
  }

  return (
    <AddQuestStyled>
      <input
        type='text'
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder='Add Quest...'
      />
      <button type='button' onClick={onAddTask}>
        Add Quest
      </button>
    </AddQuestStyled>
  )
}

export default AddQuest
