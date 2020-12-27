import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import { Button } from 'library/Buttons'

export const ClearButton = () => {
  const dispatch = useDispatch()

  return (
    <Button 
    onClick={() => {
      dispatch(todos.actions.removeAll())
    }}
    >
      Remove all
    </Button>
  )
}