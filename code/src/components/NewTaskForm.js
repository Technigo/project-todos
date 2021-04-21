import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks'

export const NewTaskForm = () => {

    const [newTask, setNewTask] = useState ('')

    const onTaskTextChange = (event) => {
        setNewTask(event.target.value)
    }

    const dispatch = useDispatch()

    return (
        <>
            <form>
                <label htmlFor="new-task">New tasks</label>
                <input  
                    id='new-task'
                    type='text'
                    value={newTask}
                    onChange={onTaskTextChange}
                    />
                <button
                    type='submit'
                    // onClick={() => dispatch(tasks.actions.addTask({ newTaskText: newTask }))}>
                    onClick={console.log('helloodfffggffo')}>
                    Add
                </button>

                <button     
                    type='button'
                    // disabled={answer === undefined}
                    // onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
                    onClick={console.log('neeej')}>
                    Next
                </button>
            </form>
        </>
    )
}


