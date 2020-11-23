import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {tasks} from '../reducers/tasks'

export const NewTask = () => {
    const dispatch = useDispatch()
    const tasksArray = useSelector(store => store.tasks.items.length)
    const [newTask, setNewTask] = useState('')
    const newTaskObject = {id: tasksArray + 1, text: newTask, complete: false}

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(newTask)
        dispatch(tasks.actions.addTask(newTaskObject))
        console.log(tasksArray)
    }

    return(
        <form>
            <input 
            type='text'
            onChange={event => setNewTask(event.target.value)}
            value={newTask}
            />
            <button type='submit' onClick={onSubmit}>Submit</button>
        </form>
    )
}