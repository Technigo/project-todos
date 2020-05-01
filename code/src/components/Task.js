import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todo } from '../reducers/todo'

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
        <button onClick={handleRemoveButton}>remove</button>
      </li>
    </>
  )
}
