import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { Link } from "react-router-dom"

import { addtodo } from '../Reducers/addtodo'

export const TaskItem = ({ itemIndex }) => {
  
  const item = useSelector((store) => store.addtodo.list.items[itemIndex])
  
  const dispatch = useDispatch ()

  const onRemovedClicked = event => {}
  
  const handleOnChange = event => {
    dispatch(
      addtodo.actions.addtodo({
      itemIndex: itemIndex,
      done: !item.done,
    })
   )
  }
  return(
    // <div className={`task-item ${item.done ? "done" : ""}`}> 
    <div className="task-item">

    <input 
      type="checkbox"
      onChange={handleOnChange}
      className="task-item-check"
      checked="">
      {/* // checked={item.done ? "checked" : ""}> */}
    </input>
    {/* <span className="task-item-description">{item.description}</span>
    <a className="task-item-remove"
      onClick={onRemovedClicked}>
      [Remove]
    </a> */}

    </div>
  )
}