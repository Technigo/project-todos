import React from 'react'
import { useDispatch } from 'react-redux'

import todos from '../reducers/todos'

const ClearAll = () => {
  const dispatch = useDispatch()
  return <button  onChange={() => dispatch(todos.actions.clearAll(todos))}>clear all</button>
}

export default ClearAll
