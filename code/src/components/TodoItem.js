import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks'

export const TodoItem = (props) => {
  const dispatch = useDispatch()

  const handleRemoveButtonClick = () => {
    dispatch(tasks.actions.removeItem(props.item.id))
  }

  const toggleCheckbox = () => {
    dispatch(tasks.actions.toggleTaskStatus(props.item.id))
  }

  return (
    <li>
      <button
        className="remove"
        type="button"
        onClick={handleRemoveButtonClick}>
        X
      </button>
      <label htmlFor={`todo-${props.item.id}`} className="container">
        <input
          className="check-box"
          type="checkbox"
          defaultChecked={props.item.isCompleted}
          id={`todo-${props.item.id}`}
          onChange={toggleCheckbox} />
        <span className="checkmark" />
        {props.item.text}
      </label>
    </li>
  )
}