import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoitem } from './Reducers/todoitem';
import { Checkmark } from './Checkmark'

export const ToDoItem = ({item}) => {
  const allItems = useSelector((store) => store.todoitem.items)
  const dispatch = useDispatch();
  const [done, setDone] = useState(false)

  const handleClick = () => {
    setDone(!done)
    dispatch(todoitem.actions.statusCompleted(item))
    //change done in the store to !done...
  }

  return (
    <li className={`todo-item ${done ? "done" : ""}`}>
      <section className="checkmark-itemname">
        <div className={`finished-status ${done ? "fill" : ""}`} onClick={() => handleClick()}>
          {done ? < Checkmark /> : ""}
        </div>
        <p>{item.name}</p>
      </section>
      <button onClick={() => { dispatch(todoitem.actions.removeItem(item)) }}>Remove</button>
    </li>
  )
}