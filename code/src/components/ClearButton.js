import React from 'react'
import { useDispatch } from 'react-redux'

import { remember } from 'reducers/remember'
import { Button } from 'lib/Button'

export const ClearButton = () => {
  const dispatch = useDispatch()

  return (
    <Button
      background="#fff"
      onClick={() => {
        dispatch(remember.actions.clearAll())
      }}>
      Clear All
    </Button>
  )
}