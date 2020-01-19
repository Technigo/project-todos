import React from 'react'
import { useDispatch } from 'react-redux'
import { todoList } from 'reducers/todoList'
import './item.css'



export const Item = (props) => { 
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(todoList.actions.toggleTaskDone(props.item.id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(todoList.actions.removeItem(props.item.id))
  }
  return (
  <li className="list-item">
    <label className="checkbox-container"> 
     <input type="checkbox" className="checkbox"checked={props.item.taskDone} onChange={handleCheckboxClick}/>
    <span className="check-new"></span>
    </label>
    {props.item.name}
    <label>
      <button type="button" onClick={handleRemoveButtonClick} className="remove-button" emoji="❌">
      ❌
      </button>

    </label>
    </li>
  )
}