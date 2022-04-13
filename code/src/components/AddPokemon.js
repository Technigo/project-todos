import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import uniqid from 'uniqid'

import pokemons from 'reducers/pokemons'

const FormContainer = styled.form`
  border-radius: 4px;
  padding: 12px;
  margin-bottom: 6px;
  background: linen;
`

const AddPokemon = () => {
  const [inputValue, setInputValue] = useState("")

  const dispatch = useDispatch()

  const onFormSubmit = (event) => {
      event.preventDefault()

      const newPokemon = {
          id: uniqid(),
          name: inputValue,
          isDone: false
      }

      dispatch(pokemons.actions.addItem(newPokemon))

      setInputValue("")
  }

  return (
    <FormContainer onSubmit={onFormSubmit}>
      <label>
        Add task: &nbsp;
        <input 
          type="text" 
          placeholder="Type here"
          value={inputValue}
          required 
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label> &nbsp;
      <button type="submit">✚</button>
    </FormContainer>
  )
}

export default AddPokemon 