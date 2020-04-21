import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"

import { todos } from '../Reducers/todos.js'


export const TaskItem = ({ itemIndex }) => {
  
  const item = useSelector((store) => store.todos.list.items[itemIndex])

  const dispatch = useDispatch ()

  const onRemovedClicked = (e) => {
    dispatch(
      todos.actions.removeTodo({
        itemIndex,
      })
    )      
  }
  
  const handleOnChange = (e) => {
    dispatch(
      todos.actions.setDone({
      itemIndex: itemIndex,
      done: !item.done,
    })
   )
  }
  return(
    <div className={`task-item ${item.done ? "done" : ""}`}>
    <input 
      type="checkbox"
      onChange={handleOnChange}
      className="task-item-check"
      checked={item.done ? "checked" : ""}>
    </input>
    <span className="task-item-description">{item.description}</span>
    <a className="task-item-remove"
      onClick={onRemovedClicked}>
      [Remove]
    </a>
    </div>
  )
}