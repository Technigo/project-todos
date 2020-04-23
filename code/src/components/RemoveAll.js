import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'


export const RemoveAll = () => {
  const dispatch = useDispatch()
  return (
    <button
      className='button'
      onClick={() => {
        dispatch(todos.actions.removeAll())
      }}>
      remove all
    </button>
  )
}