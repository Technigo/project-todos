import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

export const TodoSummary = () => {
  const list = useSelector(store => store.todos.list)

  const numDone = list.items.filter(item => item.done).length

  return (
    <TodoSummarySection>
      {numDone}/{list.items.length} {list.items.length === 1 || list.items.length === 0 ? "task complete" : "tasks complete"}
    </TodoSummarySection>
  )
}

const TodoSummarySection = styled.section`
  margin: 8px;
  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  text-align: center;
  font-weight: 800;
`