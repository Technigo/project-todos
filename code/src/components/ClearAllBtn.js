import React from 'react'
import {  useDispatch } from 'react-redux'
import { RiDeleteBinLine } from 'react-icons/ri'

import todos from '../reducers/todos'

const ClearAllBtn = () => {
    const dispatch = useDispatch()

    const onClick = () => {
            dispatch(todos.actions.onDelete())
        }

    return (
        <div>
            <button 
                className="manager-btn"
                onClick={onClick}>
            <RiDeleteBinLine />
            </button>
        </div>
    )

}

export default ClearAllBtn