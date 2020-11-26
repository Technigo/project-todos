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
    dispatch(
      todos.actions.addTodoItem({
        id: Date.now(),
        description: inputValue,
        done: false
      })
    )
    dispatch(
      todos.actions.showList()
    )
    setInputValue('')
  }

  const onRemoveClick = () => {
    dispatch(todos.actions.removeAll())
  }

  return (
    <FormContainer>
      <Form onSubmit={handleOnSubmit}>
        <Label> ADD TO-DO
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
            <DeleteAllButton onClick={onRemoveClick}>
              X
            </DeleteAllButton>
          </Wrapper>
        </Label>
      </Form>
    </FormContainer>
  )
}