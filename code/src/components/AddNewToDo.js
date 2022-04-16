import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import uniqid from 'uniqid'

import todos from 'reducers/todos'

const StyledForm = styled.form`
  border: 1px solid green;
  margin: 10px;
  padding: 10px;
`

const AddNewToDo = () => {

    const dispatch = useDispatch()

    const [inputValue, setInputValue] = useState('')

    const onFormSubmit = (event) => {
        event.preventDefault()

        const newTodo = {
            id: uniqid(),
            text: inputValue,
            isComplete: false
        }

        dispatch(todos.actions.addItem(newTodo))

        setInputValue('')
    }

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <label>Add new task: &nbsp;</label>
            <input 
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Submit</button>
        </StyledForm>
    )
}

export default AddNewToDo