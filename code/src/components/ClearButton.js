import React from 'react'
import { useDispatch } from 'react-redux'
import { fridge } from 'reducers/fridge'

export const ClearButton = () => {
  const dispatch = useDispatch()

  return (
    <button className="clear-all" type='button' onClick={() => dispatch(fridge.actions.removeAll())}>
      Clear all
    </button>
  )
}