import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

import {tasks} from '../reducers/tasks'
import {SubmitButton, Input, Form} from './StyledComponents'

export const NewTask = ({addTask}) => {
    const dispatch = useDispatch()
    const [newTask, setNewTask] = useState('')
    const [showDatePicker, setShowDatePicker] = useState(false)
    const [startDate, setStartDate] = useState();


    const onSubmit = (event) => {
        event.preventDefault()
        dispatch(tasks.actions.addTask({newTask, startDate}))
        setNewTask('')
    }

    const pickTime = () => {
        setShowDatePicker(true)
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
            <SubmitButton type='button' onClick={pickTime}>D</SubmitButton>
            
        </Form>
        }
        {showDatePicker &&
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />}
        </>
    )
}