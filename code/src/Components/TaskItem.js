import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { todo } from "../Reducers/todo"

export const TaskItem = ({ item }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(item.isComplete)
  const handleCheckboxClick = () => {
    setChecked();
    dispatch(todo.actions.setComplete(item.id))
  }

  //deleting one element from the redux store
  const onItemDelete = (id) => {
    dispatch(todo.actions.removeItem({ id: item.id }))
  }

  return (
    <section className="task-container">
      <div className="task-box">
        <label className="custom-checkbox">
          <input
            type="checkbox"
            checked={checked}
            onChange={handleCheckboxClick}
          />
          <span class="checkmark"></span>
        </label>
        <span className="task-item">{item.text}</span>
      </div>
      <button
        className="remove-button"
        type="button"
        onClick={() => onItemDelete(item.id)}
      >
        {" "}
        <span className="button-icon" role="button" aria-label="remove">
          -
        </span>
      </button>
    </section>
  )
}
