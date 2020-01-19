import React from 'react'
import { useDispatch } from "react-redux"
import { todoTasks } from 'reducers/todoTasks'

export const ClearButton = () => {
    const dispatch = useDispatch()

    return (
        <button
            className="clearButton"
            type='button' onClick={() => dispatch(todoTasks.actions.removeAll())}>
            Done
        </button>
    )
}