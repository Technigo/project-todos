import React from 'react'
import { useDispatch } from 'react-redux'
import { todo } from '../reducers/todo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TrashButton } from '../styles/Button'

export const Task = (props) => {
  const { id, task, category, completed, dueDate, startDate } = props.item

  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(todo.actions.toggleCheckbox(id))
  }

  const handleRemoveButton = () => {
    dispatch(todo.actions.removeItem(id))
  }

  return (
    <>
      <li>
        <span>{category}: </span>
        <span>{task}</span>
        <span>{startDate}</span>
        {/* <span>{dueDate}</span> */}
        <input
          type="checkbox"
          isChecked={completed}
          onChangeHandler={handleCheckboxClick}
        />
        <TrashButton onClick={handleRemoveButton}><FontAwesomeIcon icon="trash-alt" /></TrashButton>
      </li>
    </>
  )
}
