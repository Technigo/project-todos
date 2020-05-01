import React from 'react'
import { Button } from '../styles/Button'
import { useDispatch } from 'react-redux'
import { todo } from '../reducers/todo'
import { useSelector } from 'react-redux'

export const ClearTasks = () => {
  const items = useSelector((state) => state.todo.items)
  const enabled = items.length > 0

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(todo.actions.removeAll())
  }

  return (
    <>
      <Button onClick={handleClick} disabled={!enabled}>Clear all</Button>
    </>
  )
}
