import React from 'react'
import {useDispatch} from 'react-redux'

import todo from '../reducers/todo'

const DeleteButton = ({item}) => {
  const dispatch = useDispatch()
  return (
    <span
    role="img"
    aria-label="delete"
    onClick={() =>dispatch(todo.actions.deleteItem(item.id))}
    >❌</span>
  )
}
export default DeleteButton