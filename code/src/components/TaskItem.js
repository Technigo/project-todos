import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { tasks } from '../reducers/tasks'
import { ButtonRemove } from 'lib/Button'

// import styled from 'styled-components'
// import { Checkbox2 } from '../lib/Checkbox2'
// For time stamping to dos import moment from 'moment'

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
      {/* <Checkbox onClick={onRemoveClicked}></Checkbox> */}
      <input 
      type="checkbox"
      onChange={handleOnChange}
      className="todo-item-check"
      checked={item.done ? "checked" : ""}
      ></input>
      <span className="todo-item-description">{item.description}</span>
      <span className="todo-item-description">{item.id}</span>
      {/* <span className="MAKE TIMESTAMP">Due date:{item.id}</span> */}
{/*       <a className="todo-item-remove" onClick={onRemoveClicked}>
      [remove]
    </a> */}
      {/* <button className="todo-item-remove" onClick={onRemoveClicked}>remove</button> */}
      <ButtonRemove onClick={onRemoveClicked}>Remove</ButtonRemove>
{/*       <label>
          <Checkbox2
            checked={item.done ? "checked" : ""}
            onChange={handleOnChange}
          />
          <span style={{ marginLeft: 8 }}>Box</span>
        </label> */}
    </div>
  )
}
