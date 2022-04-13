import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'
import styled from 'styled-components'

import tasks from 'reducers/tasks'

const AddForm = styled.form`
display: flex;
position: relative;
`
const ButtonAdd = styled.button`
border: none;
background: none;
font-size: 2rem;
`
const InputField = styled.input`
font-size: 1.5em;
border: none;
outline-style: none;
height: 5rem;
`

const TaskAdd = () => {
    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()

    const onFormSubmit = (event) => {
        event.preventDefault()

        const newTask = {
            id: uniqid(),
            text: inputValue,
            complete: false
        }

        dispatch(tasks.actions.addItem(newTask))

        setInputValue('')
    }

    return (
        <AddForm onSubmit={onFormSubmit}>
            <ButtonAdd type='submit'>
              <span role='img' aria-label='add task'>+</span>
            </ButtonAdd>
            <InputField
              placeholder='Add task'
              aria-label='add task text'
              type='text'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            >
            </InputField>
        </AddForm>
    )
}

export default TaskAdd
