import React from "react"
import { useDispatch } from "react-redux"

import todos from "../reducers/todos"

const CompleteAll = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(todos.actions.setAllTodostoCompleted())}>
        Complete All
      </button>
    </div>
  )
}

export default CompleteAll
