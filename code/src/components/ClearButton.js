import React from 'react'
import { useDispatch } from 'react-redux'
import { fridge } from 'reducers/fridge'
import './ClearButton.css'

export const ClearButton = () => {
    const dispatch = useDispatch()

    return (
        <button
            className="clearButton"
            type="button" onClick={() => dispatch(fridge.actions.removeAll())}>
            Clear All!
        </button>
    )
}