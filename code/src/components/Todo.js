// This component should return a list item that is rendered with map in TodoList
// There will be a checkbox on each todo to mark when task is done
// There will be a remove-button to remove the task also.
//Here I need to return <li></li>?
import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
// import moment from 'moment'
// import { Button } from 'lib/Button' --> 
// if I want to make button into generic reusable component using styled components

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
      <button type='button' onClick={handleRemoveButtonClick}>
        Remove todo
      </button>
    </li>
  )
}
