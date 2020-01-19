import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { fridge } from '../reducers/fridge'

export const Item = (props) => {
    const dispatch = useDispatch()

const handleRemoveButtonClick = () => {
    dispatch(fridge.actions.removeItem(props.item.id))
    }
    
return (
    <li>
        <button className="remove" type="button" onClick={handleRemoveButtonClick}>
            X
        </button>
        <label className="container">
            <input className="check-box" type="checkbox" onClick=""></input>
            <span className="checkmark"></span>
            {props.item.name}
        </label>
    </li>


)
}