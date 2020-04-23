import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from "../reducers/todos.js"
import { Button } from '../lib/Button'


export const TodoRemoveall = () => {
    const dispatch = useDispatch()
    return (
      <Button
        onClick={() => {
          dispatch(todos.actions.removeAll())
        }}
      >
        Remove All
      </Button>
    )
  }

  