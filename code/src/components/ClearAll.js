import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todos } from '../reducers/todos'
import { Button } from '../lib/Button'

export const ClearAll = () => {
  const itemsLength = useSelector(store => store.todos.items.length)
  const dispatch = useDispatch()

  //Clears all todos by returning the initial empty state
  const onClick = () => dispatch(todos.actions.clearAll())

  return (
    <>
      {itemsLength > 0 &&
        <Button aria-label='Clear all tasks' onClick={onClick} width={'90%'} margin={'5px auto'}>Clear all</Button>
      }
    </>
  )
}