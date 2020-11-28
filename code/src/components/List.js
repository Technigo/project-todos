import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { todos } from 'reducers/Todos.js'
import './List.css'

export const List = () => {
  const dispatch = useDispatch()
  const items = useSelector((store) => store.todos.items)

  const onItemDelete = id => {
    dispatch(todos.actions.removeItem(id))
  }

  return (
    <div className="list-container">
      {items.map(item => (
        <div className="task-text" key={item.id}>
          <div>{item.name}</div>
          <div>{item.isComplete ? "Complete" : "Not complete"}</div>
          <button className="delete-button" onClick={() => onItemDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}