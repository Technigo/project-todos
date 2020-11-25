import React from 'react'
import {useDispatch} from 'react-redux'

import {tasks} from '../reducers/tasks'
import {TaskContainer, RemoveButton, Todo, TaskTitle} from './StyledComponents'

export const Task = ({text, complete, task}) => {
    const dispatch = useDispatch()
    const check = () => {
        dispatch(tasks.actions.markComplete(task))
    }

    return(
        <TaskContainer>
            <Todo checked={complete}>
                <input type="checkbox"
                checked={complete}
                onChange={check}/>
                <TaskTitle>{text}</TaskTitle>
            </Todo>
            <RemoveButton onClick={()=>dispatch(tasks.actions.removeThisTask(task))}>X</RemoveButton>
            
        </TaskContainer>
    )
}

/* <button onClick={() => dispatch(tasks.actions.markComplete(task))}>Check</button> */