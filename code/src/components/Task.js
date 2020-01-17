import React from 'react'
import {useDispatch} from 'react-redux'
import {tasks} from 'reducers/tasks'
import './tasks.css'


export const Task = ({props}) =>{
    const dispatch = useDispatch()

    const handleCheckboxClick = () =>{
dispatch(tasks.actions.toggleMarkAsCompleted(props.id))
    }

    const handleRemoveButtonClick = () =>{
        dispatch(tasks.actions.removeItem(props.id))
    }


    return(
        <section >
        <li className='tasklist'>{props.text}
        <label className='checkboxButton' >
            <input  type="checkbox" checked={props.complete} onChange={handleCheckboxClick}/>
            
            
            <button className='removeButton' type="button" onClick={handleRemoveButtonClick}>x</button>
            </label>
            </li>
            </section>
    )
}