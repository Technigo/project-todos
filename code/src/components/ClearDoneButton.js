import React from 'react'
import { useDispatch } from 'react-redux'

import { remember } from 'reducers/remember'
import { Button } from 'lib/Button'

export const ClearDone = () => {
  const dispatch = useDispatch()

  return (
    <Button
      background="salmon"
      onClick={() => {
        dispatch(remember.actions.clearDone())
      }}>
      Clear Done
    </Button>
  )
}

// sort out functionality here