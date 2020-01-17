import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'

export const Todo = (props) => {
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.toggleCompleted(props.todo.id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(tasks.actions.removeTask(props.todo.id))
  }

  return (
    <li>
      {props.todo.text} {props.todo.id} {props.todo.completed + ""}

      <label>
        Buy more
        <input
          type="checkbox"
          checked={props.todo.completed}
          onChange={handleCheckboxClick}
        />
      </label>

      <button type="button" onClick={handleRemoveButtonClick}>
        Remove
      </button>
    </li>
  )
}