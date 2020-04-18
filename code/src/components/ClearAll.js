import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'

import './Content.css'
import { AmountOf } from './AmountOf'

export const ClearAll = () => {
  const dispatch = useDispatch()
  const everyTodos = useSelector(store => store.todos.list.todos.length)

  const handleClearAll = () => {
    dispatch(
      todos.actions.removeAll()
    )
  }

  return (
    <div>
      <button type="button"
        className="clearAll"
        onClick={handleClearAll}
        disabled={everyTodos === 0}>
        Clear All
      </button>
      <AmountOf />
    </div>
  )
}