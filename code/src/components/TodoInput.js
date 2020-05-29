import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { todos } from '../reducers/reducer'
import { Button } from '../library/Button'

const InputContainer = styled.form`
  border: 2px solid navy; 
  padding: 2em;
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
        Hello this is Todo input
        <input
          type='text'
          onChange={e => setInputValue(e.target.value)} 
          value={inputValue}
          className='todo-input-text'
          placeholder='Drink another coffee..'>
        </input> 
        <input
          type='submit'
          className='button'
          value='add to list'
          disabled={inputValue === ''}>
        </input>
      </InputContainer>
      <Button onClick={handleRemoveClick}>Remove All</Button>
    </>
    )
  }