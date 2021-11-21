import React from "react"
import { useSelector, useDispatch } from "react-redux"

import todos from "../reducers/todos"
import Swal from "sweetalert2"

const DeleteAll = () => {
  const items = useSelector(store => store.todos.items)
  console.log(items)

  const dispatch = useDispatch()

  const deleteAllTodos = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      showCancelButtonColor: "var(--green)",
      confirmButtonColor: "var(--green)",
      cancelButtonColor: "var(--orange)",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        dispatch(todos.actions.deleteAll())
        Swal.fire("Deleted!", "Your file has been deleted.", "success")
      }
    })
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
