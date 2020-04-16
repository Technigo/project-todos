/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useDispatch } from 'react-redux'
import { fridge } from 'reducers/fridge'

export const Item = (props) => {
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(fridge.actions.toggleNeedsMore(props.item.id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(fridge.actions.removeItem(props.item.id))
  }

  return (
    <li>
      {props.item.name}

      <label>
        Buy more
        <input
          type="checkbox"
          checked={props.item.needsMore}
          onChange={handleCheckboxClick} />
      </label>

      <button type="button" onClick={handleRemoveButtonClick}>
        Remove
      </button>
    </li>
  )
}
