import React from 'react'
import { useDispatch } from 'react-redux'
import { todoList } from 'reducers/todoList'


export const Item = (props) => { 
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(todoList.actions.toggleTaskDone(props.item.id))
  }
  return (
  <li>
    <label> 
     <input type="checkbox"checked={props.item.taskDone} onChange={handleCheckboxClick}/>
    </label>
    {props.item.name}
    </li>
  )
}