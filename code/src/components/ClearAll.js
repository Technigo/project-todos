import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import swal from 'sweetalert'
import { todos } from '../reducers/todos'

import './style/Clear.css'
import { AmountOf } from './AmountOf'

export const ClearAll = () => {
  const dispatch = useDispatch()
  const everyTodos = useSelector(store => store.todos.list.todos.length)

  // Get pop-up to confirm before clearing list
  const handleClearAll = () => {
    swal({
      title: 'Are you sure?',
      text: "Once deleted, you can't recover your list!",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
      dispatch(
      todos.actions.removeAll()
    )}
    })
  }

  //Btn to clear list
  return (
    <div className="clearContent">
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