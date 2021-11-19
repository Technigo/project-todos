import React from "react"
import { useSelector, useDispatch } from "react-redux"

import todos from "reducers/todos"

import "./todolist.css"

export const CountItems = () => {
  const dispatch = useDispatch()

  const counter = useSelector((store) => store.todos.items.length)

  const completedTasks = useSelector(
    (store) => store.todos.items.filter((item) => item.isComplete).length
  )

  const onClickCompleteAll = () => {
    dispatch(todos.actions.completeAllTasks())
  }

  return (
    <div className="item-counter">
      <p>
        <span className="number-total">{counter}</span> tasks total
      </p>
      <p>
        <span className="number-complete">{completedTasks}</span> completed ✔️
      </p>
      <button className="complete-all-btn" onClick={onClickCompleteAll}>
        Complete all
      </button>
    </div>
  )
}
