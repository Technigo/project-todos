import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'
import styled from 'styled-components'

import tasks from 'reducers/tasks'

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
        <form onSubmit={onFormSubmit}>
            <input
              aria-label='add task text'
              type='text'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            >
            </input>
            <button type='submit'>Add to list</button>
        </form>
    )
}

export default TaskAdd
