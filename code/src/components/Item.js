import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

export const Item = ({ itemIndex, text }) => {
  const item = useSelector((store) => store.todos.items[itemIndex]);

  const dispatch = useDispatch()

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
    <div className={`item ${item.completed ? 'completed' : ''}`} onClick={completeItem}>
      {text}
      <button onClick={removeItem}>x</button>
    </div>
  )
}
