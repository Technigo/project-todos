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

    <li className={props.item.needsMore ? 'checked' : 'unchecked'}>
    <span className="text">
     {props.item.name} 
     </span> 
     
      <span className="checkboxbuttons">

      <label>    
        <input
          type="checkbox"
          checked={props.item.needsMore}
          onChange={handleCheckboxClick} />
        <span className="fakeCheckbox" />  
      </label>

      <button type="button" onClick={handleRemoveButtonClick}>
        <span role="img" aria-label="x">✖️</span> 
      </button>

      </span>

    </li>
  )
}