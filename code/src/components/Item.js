import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { tasks } from '../reducers/tasks'

export const Item = (props) => {
    const dispatch = useDispatch()

    const handleRemoveButtonClick = () => {
    dispatch(tasks.actions.removeItem(props.item.id))
    }

    const [ checked, setChecked ] = useState('')


    
return (
    <li>
        <button className="remove" type="button" onClick={handleRemoveButtonClick}>
            X
        </button>
        <label className="container">
            <input className="check-box" type="checkbox" value={checked} onClick={console.log(setChecked)}></input>
            <span className="checkmark"></span>
            {props.item.name}
        </label>
    </li>


)
}