import React from 'react'
import { useDispatch } from 'react-redux'
import { Delete } from '@material-ui/icons'
import todo from '../reducers/todo'

const DeleteButton = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <Delete
      style={{ color:  "#8da7fe"}}
      aria-label="delete"
      onClick={() => dispatch(todo.actions.deleteItem(item.id))}
    />
  )
}
export default DeleteButton