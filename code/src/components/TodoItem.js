import React from 'react'
import { useDispatch } from 'react-redux'
import { todoList } from 'reducers/todoList'

export const TodoItem = props => {
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(todoList.actions.toggleComplete(props.item.id))
  }

  const handleRemoveClick = () => {
    dispatch(todoList.actions.removeTodo(props.item.id))
  }

  return (
    <>
      <li>
        <input
          type='checkbox'
          checked={props.item.complete}
          onChange={handleCheckboxClick}
        />

        {props.item.name}

        <button
          type='button'
          onClick={handleRemoveClick}
        >
          Remove
      </button>
      </li>
    </>
  )
}