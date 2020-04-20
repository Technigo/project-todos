import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoitem } from './Reducers/todoitem';
import { Checkmark } from './Checkmark'

export const ToDoItem = ({item}) => {

  const dispatch = useDispatch();
  const [done, setDone] = useState(false)

  return (
    <li className={`todo-item ${done ? "done" : ""}`}>
      <section className="checkmark-itemname">
        <div className={`finished-status ${done ? "fill" : ""}`} onClick={() => setDone(!done)}>
          {done ? < Checkmark /> : ""}
        </div>
        <p>{item.name}</p>
      </section>
      <button onClick={() => { dispatch(todoitem.actions.removeItem(item)) }}>Remove</button>
    </li>
  )
}