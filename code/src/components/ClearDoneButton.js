import React from 'react'
import { useDispatch } from 'react-redux'

import { remember } from 'reducers/remember'
import { Button } from 'lib/Button'

export const ClearDone = () => {
  const dispatch = useDispatch()

  return (
    <Button
      onClick={() => {
        dispatch(remember.actions.clearDone())
      }}>
      Clear Done
    </Button>
  )
}