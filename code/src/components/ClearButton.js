import React from 'react'
import { useDispatch } from "react-redux"
import { tasks } from 'reducers/Tasks'

import './ClearButton.css'

export const ClearButton = () => {
  const dispatch = useDispatch()

  return (
    <button
      className='clear-button'
      onClick={() => { dispatch(tasks.actions.removeAll()) }}>
      <p className='p-remove-button'>Remove all</p>
    </button>
  )
}