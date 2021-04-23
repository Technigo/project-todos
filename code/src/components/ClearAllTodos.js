import React from 'react'
import {useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const ClearAllTodos = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(todos.actions.clearAllTodos())}>
        Mark all done
      </button>
    </div>
  )
}

export default ClearAllTodos