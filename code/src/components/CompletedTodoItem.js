import React from "react"
import { useDispatch } from "react-redux"
import { todoList } from "reducers/todoList"

export const CompletedTodoItem = props => {
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(todoList.actions.uncompleteTodo(props.item.id))
  }

  const handleRemoveClick = () => {
    dispatch(todoList.actions.removeTodo(props.item.id))
  }

  return (
    <li className='checked'>
      <label className='container'>
        <input type='checkbox' checked={true} onChange={handleCheckboxClick} />
        <span class='checkmark'></span>
      </label>
      <div>{props.item.name}</div>
      <button
        className='remove'
        type='button'
        onClick={handleRemoveClick}
        aria-label='remove todo'
      >
        🗑️
      </button>
    </li>
  )
}
