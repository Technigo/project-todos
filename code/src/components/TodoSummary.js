import React from 'react'
import { useSelector } from 'react-redux'
import { ClearAll } from './ClearAll'
import { SummaryContainer } from 'lib/Container'

export const TodoSummary = () => {
  // Get list information from the store, for this list
const list = useSelector(store => store.todos.list)
  // Count the number of items that are done using filter
const numDone = list.items.filter(item => item.done).length


  return (
  <SummaryContainer >
      <h2>
        {numDone}/{list.items.length} done
      </h2>
      <ClearAll />
  </SummaryContainer>
  )
};