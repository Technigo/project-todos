import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'
import styled from 'styled-components'

import tasks from '../reducers/tasks'

const InputContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-bottom: 20px;    
`

const TaskInput = styled.input`
    margin: 30px 0 10px 0;
    width: 100%;
`

const SubmitButton = styled.button`
    width: 35%
`

const NewTaskInput = () => {
    const [task, setTask] = useState('')
    const dispatch = useDispatch()
    const onFormSubmit = (event) => {
        event.preventDefault()

        const newTask = {
            id: uniqid(),
            description: task,
            isComplete: false
        }

        dispatch(tasks.actions.addTask(newTask))
        setTask('')
    }

    return(
        <InputContainer onSubmit={onFormSubmit}>
            <TaskInput 
                type='text'
                value={task}
                onChange={event => setTask(event.target.value)}
            />
            <SubmitButton type='submit'>add task</SubmitButton>
        </InputContainer>
    )
}

export default NewTaskInput