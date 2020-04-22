import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
//import { Button } from 'lib/Button'

export const ClearAll = () => {
  const dispatch = useDispatch()
  return (
    <Button
      background='#e45e69'
      onClick={() => {
        dispatch(todos.actions.removeAll())
      }}
    >
      Remove All
    </Button>
  )
}
