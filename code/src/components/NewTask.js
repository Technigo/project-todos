import React, {useState} from 'react'
import {useDispatch} from 'react-redux'

import {tasks} from '../reducers/tasks'
import {SubmitButton, Input, Form} from './StyledComponents'

export const NewTask = ({addTask}) => {
    const dispatch = useDispatch()
    const [newTask, setNewTask] = useState('')


    const onSubmit = (event) => {
        event.preventDefault()
        dispatch(tasks.actions.addTask(newTask))
        setNewTask('')
    }
    
    return(
        <>
        {addTask &&
        <Form>
            <Input
            type='text'
            onChange={event => setNewTask(event.target.value)}
            value={newTask}
            required
            placeholder= '+ Add new task'
            />
            <SubmitButton type='submit' onClick={onSubmit}>+</SubmitButton>
        </Form>
        }
        </>
    )
}