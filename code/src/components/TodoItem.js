import React from 'react'
import { todos } from '../reducers/todos.js'
import { useSelector, useDispatch } from 'react-redux'
import { TimeStamp } from './TimeStamp'
import { todoItem } from './todoItem.css'

export const TodoItem = ({ itemIndex }) => {
  // Get the item from the store based on the index
  const item = useSelector(store => store.todos.list.items[itemIndex])

  const dispatch = useDispatch()

  // Create the onRemoveClicked handler
  const onRemoveClicked = event => {
    dispatch(
      todos.actions.removeTodo({
        itemIndex: itemIndex
      })
    )
  }

  // Create the onChange handler for handling the done status
  const handleOnChange = event => {
    dispatch(
      todos.actions.setDone({
        itemIndex: itemIndex,
        done: !item.done
      }))
  }

  return (
    <div className={`todo-item ${item.done ? "done" : ""}`}>
      <input
        type='checkbox'
        onChange={handleOnChange}
        className='todo-item-check'
        checked={item.done ? "checked" : ""}
      ></input>
      <span className='todo-item-description'>{item.description}</span>
      <button className='todo-item-remove' onClick={onRemoveClicked}>x</button>
      <TimeStamp />
    </div>
  )
}