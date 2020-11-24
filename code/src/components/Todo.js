import React from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'

import { todos } from 'reducers/todos'
import { Button } from 'library/Buttons'

export const Todo = (props) => {
  const { id, text, dueDate, category, complete, startDate } = props.item;
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(todos.actions.toggleCompleted(id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(todos.actions.removeTodo(id))
  }

  return (
    <li>
      <span>{category}: </span>
      <span>{text} - </span>
      <label>
        completed:
        {/* this checkbox will be replaced by a custom one */}
        {/* <CustomCheckbox> */}
        <input
        type='checkbox'
        checked={complete}
        onChange={handleCheckboxClick}
      />
      </label>
      <Button 
        type='button' 
        onClick={handleRemoveButtonClick} 
        background='#f9adae'
      >
        Remove
      </Button>
      <span>ADDED: {moment(startDate).format('MMM Do YYYY')}</span>
      {dueDate && <span> DUE: {moment(dueDate).format('MMM Do YYYY')}</span>}
    </li>
  )
}
