import React from 'react'
import {  useDispatch } from 'react-redux'
import { RiDeleteBinLine } from 'react-icons/ri'

import todos from '../reducers/todos'

const CheckAllBtn = () => {
    const dispatch = useDispatch()

    const onClick = () => {
        dispatch(todos.actions.completeAllTasks())
    }

    return (
        <div>
            <button 
                className="manager-btn"
                onClick={onClick}>
            Complete All
            </button>
        </div>
    )

}

export default CheckAllBtn