import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { todos } from '../reducers/reducer'
import { RemoveButton, SubmitButton } from '../library/Button'

const InputContainer = styled.form`
  padding: 2em;
  display: flex;
  margin: 0 2em;
  justify-content: space-between; 
`

const InputField = styled.input`
  padding: .5em 1em;
`

export const TodoInput = ({id}) => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')


  const handleOnSubmit = event => { 
    event.preventDefault()
    dispatch(todos.actions.addTodo({
      id: id,
      itemInfo: {
        text: inputValue,
        complete: false
      }
    })
    )
    setInputValue('')
  }

  const handleRemoveClick = () => {
    dispatch(
      todos.actions.removeAll()
    )
  }

    return (
      <>
      <InputContainer onSubmit={handleOnSubmit}>
        <InputField
          type='text'
          onChange={e => setInputValue(e.target.value)} 
          value={inputValue}
          placeholder='What do you need to do...'>
        </InputField> 
        <SubmitButton
          type='submit'
          value='add to list'
          disabled={inputValue === ''}
          >
        </SubmitButton>
      </InputContainer>
      <RemoveButton onClick={handleRemoveClick}>Remove All</RemoveButton>
    </>
    )
  }