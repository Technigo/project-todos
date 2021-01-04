
import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import '../index.css'

export const Item = (props) => {
    const dispatch = useDispatch()
    const handleRemoveButtonClick = () => {
        dispatch(todos.actions.removeItem(props.item.id))
    }

    return (
        <>
            <div className="remove-button">
                <button type='button' onClick={handleRemoveButtonClick}>
                    X
        </button>
            </div>
        </>


    )
}