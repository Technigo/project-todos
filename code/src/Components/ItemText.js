import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoitem } from './Reducers/todoitem';
import { Checkmark } from './Checkmark'

export const ItemText = ({item}) => {

  const dispatch = useDispatch();
  const [done, setDone] = useState(false)

  return (
    <li className={`todo-item ${done ? "done" : ""}`}>
      <div className={`finished-status ${done ? "fill" : ""}`} onClick={() => setDone(!done)}>
        {done ? < Checkmark /> : ""}
      </div>
      <p>{item.name}</p>
      <button onClick={() => { dispatch(todoitem.actions.removeItem(item)) }}>remove</button>
    </li>
  )
}
