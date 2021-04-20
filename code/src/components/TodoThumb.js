import React from 'react'
import { useDispatch } from 'react-redux'

import todo from '../reducers/todo'
import DeleteButton from './DeleteButton'

const TodoThumb = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <div className="item-container">
      <input className="item-checkbox"
        type="checkbox"
        checked={item.isComplete}
        onChange={() => dispatch(todo.actions.toggleChecked(item.id))} 
      />
      <p className="item-description">{item.description}</p>
      <DeleteButton item={item}/>
    </div>
  )
}
export default TodoThumb