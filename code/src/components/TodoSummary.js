import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

export const TodoSummary = () => {
  // Get list information from the store, for the list
  const list = useSelector(store => store.todos.list)

  // Count the number of items that are done using filter
  const numDone = list.items.filter(item => item.done).length

  return (
    <section className="todo-summary">
      <h2>
        {numDone}/{list.items.length} {list.items.length === 1 || list.items.length === 0 ? "task complete" : "tasks complete"}
      </h2>
    </section>
  )
}

const TodoSummary = styled.section`
  margin: 8px;
  font-family: 'Manrope', sans-serif;
`