import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {tasks} from '../reducers/tasks'

export const NewTask = () => {
    const dispatch = useDispatch()
    const [newTask, setNewTask] = useState('')


    const onSubmit = (event) => {
        event.preventDefault()
        dispatch(tasks.actions.addTask(newTask))
    }

    return(
        <form>
            <input
            type='text'
            onChange={event => setNewTask(event.target.value)}
            value={newTask}
            required
            />
            <button type='submit' onClick={onSubmit}>Submit</button>
        </form>
    )
}