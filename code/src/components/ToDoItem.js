/* eslint-disable no-tabs */
import React from 'react'
import { useDispatch } from 'react-redux'
import toDos from 'reducers/toDos'

export const ToDoItem = ({ toDo }) => {
  const dispatch = useDispatch()
  return (
    <li>
      <h1>
				Add a New Task!
      </h1>
      {/* <span className="emoji" role="img" aria-label={toDo.title}>{toDo.emoji}</span>
      <div className="info">
        <span className="quantity">x{toDo.quantity}</span>
        <span className="sum">{toDo.price * toDo.quantity}:-</span>
      </div> */}

      <span className="actions">
        <button type="button" onClick={() => dispatch(toDos.actions.removeItem(toDo))}>-</button>
        <button type="button" onClick={() => dispatch(toDos.actions.addItem(toDo))}>+</button>
      </span>
    </li>
  )
}
