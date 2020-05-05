import React from "react"
import { useDispatch } from "react-redux"
import { ToDo }from "reducers/toDo"
import { Button } from "library/Button"

export const ClearButton = () => {
    const dispatch = useDispatch()
    const handleRemoveAllClick = () => {
        dispatch(ToDo.actions.removeAll())
      }

    return (
        <Button type="button"  onClick={handleRemoveAllClick}>
            Remove All
        </Button>
    )
}