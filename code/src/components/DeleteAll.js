import React from "react"
import { useSelector, useDispatch } from "react-redux"

import todos from "../reducers/todos"

const DeleteAll = () => {
  const items = useSelector(store => store.todos.items)
  console.log(items)

  const dispatch = useDispatch()

  const deleteAllTodos = () => {
    const deletingAll = window.confirm(
      "Are you sure you want to complete all tasks?"
    )
    if (deletingAll) {
      dispatch(todos.actions.deleteAll())
    }
  }

  return (
    <div>
      <button className="delete-all-btn" onClick={deleteAllTodos}>
        | Delete all your todos |
      </button>
    </div>
  )
}

export default DeleteAll
