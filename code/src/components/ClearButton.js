import React from "react"
import {useDispatch} from "react-redux"
import {fridge} from "reducers/fridge"


export const ClearButton = () => {
    const dispatch = useDispatch()

    return (
        <button type="button" onClick={() => dispatch(fridge.actions.removeAll)}>
            Remove Everything
        </button>
    )
}