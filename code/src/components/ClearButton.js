import React from "react"
import {useDispatch} from "react-redux"
import {ToDo} from "reducers/ToDo"


export const ClearButton = () => {
    const dispatch = useDispatch()
    const handleRemoveAllClick = () => {
        dispatch(ToDo.actions.removeAll())
      }

    return (
        <button type="button" onClick={handleRemoveAllClick}>
            Remove All
        </button>
    )
}