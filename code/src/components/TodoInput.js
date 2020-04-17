import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

export const TodoInput = () => {
  //State for input
  const [inputValue, setInputValue] = useState('')

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(inputValue)
  }

  return (
    <TodoForm onSubmit={handleOnSubmit}>
      <TodoInputField
        type='text'
        onChange={e => setInputValue(e.target.value)}
        value={inputValue}
      ></TodoInputField>
      <Submit
        type='submit'
        value='+'
      ></Submit>
    </TodoForm>
  )
}

const TodoForm = styled.form`
  
`

const TodoInputField = styled.input`
  
`

const Submit = styled.input`
  
`