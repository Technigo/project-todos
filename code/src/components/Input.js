import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { todos } from '../reducers/todos'
import { DeleteAll } from './DeleteAll'
import { Form, InputField, Label } from '../styledComponents/form'
import { FormContainer, Wrapper } from '../styledComponents/containers'
import { AddButton } from '../styledComponents/buttons'

export const Input = () => {
  const [inputValue, setInputValue] = useState('')

  const showList = useSelector((store) => store.todos.showList)

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
      todos.actions.showList(true)
    )
    setInputValue('')
  }

  return (
    <FormContainer>
      <Form onSubmit={handleOnSubmit} >
        <Label> 
          ADD TO-DO
          <Wrapper>
            <InputField
              type='text'
              onChange={event => setInputValue(event.target.value)}
              value={inputValue}
            />
            <AddButton
              type='submit'
              value='add todo'
              disabled={inputValue.length < 1}
            >
            +
            </AddButton>
          </Wrapper>
          {showList && <DeleteAll />}
        </Label>
      </Form>
    </FormContainer>
  )
}