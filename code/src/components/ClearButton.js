import React from "react"
import {useDispatch} from "react-redux"
import {ToDo} from "reducers/ToDo"


export const ClearButton = () => {
    const dispatch = useDispatch()

    return (
        <button type="button" onClick={() => dispatch(ToDo.actions.removeAll)}>
            Clear All
        </button>
    )
}