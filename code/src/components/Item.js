import React from 'react'
import { useDispatch } from 'react-redux'
import { fridge } from 'reducers/fridge'
import './item.css'

export const Item = (props) => {
    const dispatch = useDispatch()

    const handleCheckBoxClick = () => {
        dispatch(fridge.actions.toggleNeedsMore(props.item.id))
    }

    const handleRemoveButtonClick = () => {
        dispatch(fridge.actions.removeItem(props.item.id))
    }

    return (
        <li>
            {props.item.name}
            <label>
                Buy More!
                <input
                    type="checkbox"
                    checked={props.item.needsMore}
                    onChange={handleCheckBoxClick} />
            </label>

            <button className="removeButton"
                type="button"
                onClick={handleRemoveButtonClick}>
                Remove!
            </button>
        </li>
    )
}