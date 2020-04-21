import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

export const Item = ({ itemIndex, text }) => {

  const item = useSelector((store) => store.todos.items[itemIndex])
  const dispatch = useDispatch()

  // 
  const removeItem = (e) => {
    dispatch(todos.actions.removeTodo({
      itemIndex: itemIndex
    }))
  }

  const completeItem = (e) => {
    dispatch(
      todos.actions.setComplete({
        itemIndex: itemIndex,
        completed: !item.completed
      })
    )
  }

  return (
    <div className={`item ${item.completed ? "completed" : ''}`}>

      <label class="checkbox-container">
        <input
          type="checkbox"
          onChange={completeItem}
          className="item-check"
          checked={item.completed ? "checked" : ""}
        ></input>
        <span class="checkbox-custom"></span>
      </label>

      <span className="item-desc">{text}</span>

      <button className="remove-btn" onClick={removeItem}>x</button>
    </div>
  )
}
