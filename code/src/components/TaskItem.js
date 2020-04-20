import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { tasks } from '../reducers/tasks'
import { ButtonStyle } from 'lib/Button'

// For time stamping to dos
// import moment from 'moment'


export const TaskItem = ({ itemIndex }) => {
    // Get the item from the store based on the index
    // If index changes this entire component will re-render - important
  const item = useSelector((store) => store.tasks.list.items[itemIndex])

  const dispatch = useDispatch()
    // Dispatch the remove todo event for this item:
  const onRemoveClicked = (event) => {
    dispatch(
      tasks.actions.removeTodo({
        itemIndex,
      })
    )
  }

  // Change the value of done for this item:
  const handleOnChange = (event) => {
    dispatch(
      tasks.actions.setDone({
        itemIndex: itemIndex,
        done: !item.done,
      })
    )
  }


  return (
    <div className={`todo-item ${item.done ? "done" : ""}`}>
      <input 
      type="checkbox"
      onChange={handleOnChange}
      className="todo-item-check"
      checked={item.done ? "checked" : ""}
      ></input>
      <span className="todo-item-description">{item.description}</span>
      {/* <span className="MAKE TIMESTAMP">Due date:{item.id}</span> */}
{/*       <a className="todo-item-remove" onClick={onRemoveClicked}>
      [remove]
    </a> */}
      <button className="todo-item-remove" onClick={onRemoveClicked}>remove</button>
      <ButtonStyle>Remove</ButtonStyle>
    </div>
  )
}