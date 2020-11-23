import React from 'react'
import { useDispatch } from 'react-redux'
import { bag } from 'redux/reducers/bag'



export const HandleThings = (props) => {
  const dispatch = useDispatch()

  const handleRemoveButtonClick = () => {
    dispatch(bag.actions.removeItem(props.item.id))
  }



  return (
    <li>
      <span>{props.item.category}</span>
      <span>{props.item.name}</span>

      <label>
        Finish your packing
      </label>
      <button 
        type='button' 
        onClick={handleRemoveButtonClick}>
        Remove
      </button>
    </li>
  )
}