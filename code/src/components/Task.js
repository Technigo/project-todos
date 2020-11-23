import React from 'react'
import {useDispatch} from 'react-redux'
import {tasks} from '../reducers/tasks'

export const Task = ({text, complete, task}) => {
    const dispatch = useDispatch()
    
    return(
        <div>
            <p>Title: {text} {complete ? ' complete' : ' uncomplete'}</p>
            <button onClick={() => dispatch(tasks.actions.markComplete(task))}>Check</button>
        </div>
    )
}