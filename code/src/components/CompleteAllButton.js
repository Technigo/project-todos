import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todos } from 'reducers/todos'
import { Button } from 'library/Buttons'

export const CompleteAllButton = () => {
  const dispatch = useDispatch()
  const items = useSelector((store) => store.todos.items)
  const completedItems = items.filter((item) => item.complete)

  const handleAllComplete = () => {
    dispatch(todos.actions.setAllComplete())
  }

  const handleAllIncomplete = () => {
    dispatch(todos.actions.setAllIncomplete())
  }

  return (
    <Button
      onClick={completedItems.length !== items.length
        ? () => handleAllComplete()
        : () => handleAllIncomplete()}
    >
      {completedItems.length !== items.length
        ? "Complete all"
        : "Mark all incomplete"}
    </Button>
  )
}