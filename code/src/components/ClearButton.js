import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

export const ClearButton = () => {
    const dispatch = useDispatch()
    return (
        <div className="remove-all-button">
        <button onClick={() => {
            dispatch(todos.actions.removeAll())
        }}>
            Remove All
            </button>
        </div>
    )
}