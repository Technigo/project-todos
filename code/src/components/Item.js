import React from 'react'
import { useDispatch } from 'react-redux'
import { todoList } from 'reducers/todoList'


export const Item = (props) => { 
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(todoList.actions.toggleTaskDone(props.item.id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(todoList.actions.removeItem(props.item.id))
  }
  return (
  <li>
    <label> 
     <input type="checkbox"checked={props.item.taskDone} onChange={handleCheckboxClick}/>
    </label>
    {props.item.name}
    <label>
      <button type="button" onClick={handleRemoveButtonClick}>
        Remove
      </button>

    </label>
    </li>
  )
}