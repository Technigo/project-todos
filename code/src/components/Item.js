/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useDispatch } from 'react-redux'
import { todo } from 'reducers/todo'

export const Item = (props) => {
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(todo.actions.toggleFinishedTask(props.item.id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(todo.actions.removeItem(props.item.id))
  }

  return (

    <li className={props.item.finishedTask ? 'checked' : 'unchecked'}>
    <span className="text">
     {props.item.name} 
     </span> 
     
      <span className="checkboxbuttons">

      <label>    
        <input
          type="checkbox"
          checked={props.item.finishedTask}
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