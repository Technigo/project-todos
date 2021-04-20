import React from 'react'
import { useDispatch } from 'react-redux'

import todo from '../reducers/todo'

const TodoThumb = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <div className="item-container">
      <p className="item-description">{item.description}</p>
      <input className="item-checkbox"
        type="checkbox"
        checked={item.isComplete}
        onChange={() => dispatch(todo.actions.toggleChecked(item.id))} 
      />
      
    </div>
  )
}
export default TodoThumb