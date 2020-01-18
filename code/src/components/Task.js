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
        <section className='listContainer'>
            <label className='container'>
             <input  type="checkbox" checked={props.complete} onChange={handleCheckboxClick}/>
            
             
             <span className='checkmark'></span>
             </label>
        <li className='tasklist'>{props.text}
        <label className='remove-btn-container' >
           
            
            
            <button className='removeButton' type="button" onClick={handleRemoveButtonClick}>x</button>
           
            </label>
            </li>
            </section>
    )
}