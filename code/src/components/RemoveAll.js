import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

export const RemoveButton = () => {
  const dispatch = useDispatch()




  return (
    <button className='remove-button'
      type='button'
      onClick={() => dispatch(todos.actions.removeAll())}>
      Clear
    </button>
  )
}
