import React from 'react'
import { useDispatch } from 'react-redux'
import { list } from 'reducers/list'

export const Todo = (props) => {
    const dispatch = useDispatch()

    const checkDone = () => {
        dispatch(list.actions.markDone(props.task.id))
    }

    const removeTask = () => {
        dispatch(list.actions.removeTask(props.task.id))
    }
    
    return(
        <p>
            <label>
                <input 
                type="checkbox" 
                checked={props.task.done}
                onChange={checkDone} />
            </label>
            {props.task.name}
            <button 
                type="button"
                onClick={removeTask}>
                Remove
            </button>
            
            
        </p>
    )
}

