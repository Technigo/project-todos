import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { todos } from '../reducers/todos'
import { Form, InputField, Label } from '../styledComponents/formElements'
import { FormContainer, Wrapper } from '../styledComponents/containers'
import { AddButton, DeleteAllButton } from '../styledComponents/buttons'
import { Text } from '../styledComponents/texts'

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
          <Wrapper>
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
          </Wrapper>
          <Wrapper>
            <Text>
              Delete All
            </Text>
            <DeleteAllButton>
              X
            </DeleteAllButton>
          </Wrapper>
        </Label>
      </Form>
    </FormContainer>
  )
}