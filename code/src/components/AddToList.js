import React from 'react'
import { useDispatch } from 'react-redux'
import { shopping } from 'reducers/shopping'
import './AddToList.css'

export const AddToList = (props) => {
    const dispatch = useDispatch()

    const handleCheckBoxClick = () => {
        dispatch(shopping.actions.toggleNeedsMore(props.item.id))
    }

    const handleRemoveButtonClick = () => {
        dispatch(shopping.actions.removeItem(props.item.id))
    }

    return (
        <li>
            {props.item.name}
            <label className="buyMoreLabel">
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