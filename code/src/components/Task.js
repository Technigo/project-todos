import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks'
import styled from 'styled-components'

const TaskSection = styled.section`
    display: flex;
    align-items: center;
`

export const Task = (task, taskText) => {

    const dispatch = useDispatch()
    const taskList = useSelector((store => store.tasks.taskList))

    return (
        
        <TaskSection>
            <input 
                type='checkbox'
                checked={task.IsDone}
                onChange={() => dispatch(tasks.actions.toggleIsDone(task.id))} 
            />
            <p>{task.taskText}</p>
        </TaskSection>
    )
}