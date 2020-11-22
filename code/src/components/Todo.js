// This component should return a list item that is rendered with map in TodoList

import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
// import moment from 'moment'
import { Button } from 'library/Button'

export const Todo = (props) => {
  const dispatch = useDispatch()

  //These handle-functions don't work now. Error: toggleCompleted is not a function
  // This must be because I have not defined any function yet, or?
  const handleCheckboxClick = () => {
    dispatch(todos.actions.toggleCompleted(props.item.id))
  }

  const handleRemoveButtonClick = () => {
    dispatch(todos.actions.removeTodo(props.item.id))
  }

  return (
    <li>
      <span>{props.item.text} - </span>
      <label>
        completed:
        <input
        type='checkbox'
        checked={props.item.complete}
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
    </li>
  )
}
