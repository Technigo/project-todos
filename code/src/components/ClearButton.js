import React from 'react'
import { useDispatch } from 'react-redux'
import { shopping } from 'reducers/shopping'
import './ClearButton.css'

export const ClearButton = () => {
    const dispatch = useDispatch()

    return (
        <button
            className="clearButton"
            type="button" onClick={() => dispatch(shopping.actions.removeAll())}>
            Clear All!
        </button>
    )
}