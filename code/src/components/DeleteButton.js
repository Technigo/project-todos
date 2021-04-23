import React from 'react'
import { useDispatch } from 'react-redux'
import { Delete } from '@material-ui/icons'

import todo from '../reducers/todo'

const DeleteButton = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <div
      className="delete-button"
      onClick={() => dispatch(todo.actions.deleteItem(item.id))}
      aria-label="delete task button"
    >
      <Delete
        style={{ color: "white" }}
        aria-label="delete icon"
      />
      <p>Delete task</p>
    </div>
  )
}
export default DeleteButton