import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { todos } from '../reducers/todos'
import { Form, InputField, Label, InputWrapper } from '../styledComponents/formElements'
import { FormContainer } from '../styledComponents/containers'
import { AddButton } from '../styledComponents/buttons'

export const Input = () => {
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch()

  const handleOnSubmit = event => {
    event.preventDefault()
    console.log(inputValue)
    dispatch(
      todos.actions.addTodoItem({
        description: inputValue,
        done: false
      })
    )
    setInputValue('')
  }

  return (
    <FormContainer>
      <Form onSubmit={handleOnSubmit}>
        <Label> Add Todo
          <InputWrapper>
            <InputField
            type='text'
            onChange={event => setInputValue(event.target.value)}
            value={inputValue}
            />
            <AddButton
              type='submit'
              value='add todo'
            >
            +
            </AddButton>
          </InputWrapper>
        </Label>
      </Form>
    </FormContainer>
  )
}