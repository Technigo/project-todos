import React from 'react'
import {useDispatch} from 'react-redux'
import {tasks} from 'reducers/tasks'


export const Task = ({props}) =>{
    const dispatch = useDispatch()

    const handleCheckboxClick = () =>{
dispatch(tasks.actions.toggleMarkAsCompleted(props.id))
    }

    const handleRemoveButtonClick = () =>{
        dispatch(tasks.actions.removeItem(props.id))
    }


    return(
        <li>{props.text}
        <label>
            <input type="checkbox" checked={props.complete} onChange={handleCheckboxClick}/>
            done
            </label>
            <button type="button" onClick={handleRemoveButtonClick}>remove</button>
            </li>
    )
}