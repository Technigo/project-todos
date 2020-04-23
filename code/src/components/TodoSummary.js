import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'lib/Button'
import { SummaryContainer } from 'lib/Container'
import { todos } from '../reducers/todos'

export const TodoSummary = () => {
const list = useSelector(store => store.todos.list)
const numDone = list.items.filter(item => item.done).length
const dispatch = useDispatch()
const handleClick = () => {
  dispatch(todos.actions.clearAll())
}

  return (
  <SummaryContainer >
      <h2>
        {numDone}/{list.items.length} done
      </h2>
      <Button onClick={handleClick}>Clear all</Button>
  </SummaryContainer>
  )
};