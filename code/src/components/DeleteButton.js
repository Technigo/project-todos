import React from 'react'
import { useDispatch } from 'react-redux'
import { Delete } from '@material-ui/icons'
import todo from '../reducers/todo'

const DeleteButton = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <div className="delete-button" onClick={() => dispatch(todo.actions.deleteItem(item.id))}>
      <Delete
        style={{ color: "white" }}
        aria-label="delete"
      />
      <p>Delete task</p>
    </div>
  )
}
export default DeleteButton