
import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import moment from 'moment'
import '../index.css'

export const Item = (props) => {
    const dispatch = useDispatch()

    const handleCheckboxClick = () => {
        dispatch(todos.actions.toggleNeedsMore(props.item.id))
    }

    const handleRemoveButtonClick = () => {
        dispatch(todos.actions.removeItem(props.item.id))
    }

    return (
        <>
            <div className="added-items">
                <span>{props.item.category}: </span>
                <span>{props.item.name} - </span>


                <label>
                    buy more
            <input
                        type='checkbox'
                        checked={props.item.needsMore}
                        onChange={handleCheckboxClick}
                    />
                </label>
                <div className="remove-button">
                    <button type='button' onClick={handleRemoveButtonClick}>
                        Remove
        </button>
                </div>

            </div>
        </>
    )
}