import React from 'react'
import { useDispatch } from 'react-redux'
import { list } from 'reducers/list'
import './todo.css'

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
                <span className="fakeCheckbox"></span>
            </label>
            {props.task.name}
            <button
                class="invisible-button"
                type="button"
                onClick={removeTask}>
                    <span role="img" aria-label="cross emoji">❌</span>
            </button>
            
            
        </p>
    )
}

