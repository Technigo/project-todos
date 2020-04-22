import React from 'react'
import { useDispatch } from 'react-redux'
import { todoitem } from './Reducers/todoitem';
import { Checkmark } from './Checkmark'

export const ToDoItem = ({item}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(todoitem.actions.completeStatus(item))
  }

  return (
    <li className={`todo-item ${item.done ? "done" : ""}`}>
      <section className="checkmark-itemname">
        <div className={`finished-status ${item.done ? "fill" : ""}`} onClick={() => handleClick()}>
          {item.done ? < Checkmark /> : ""}
        </div>
        <p>{item.name}</p>
      </section>
      <button onClick={() => { dispatch(todoitem.actions.removeItem(item)) }}>Remove</button>
    </li>
  )
}