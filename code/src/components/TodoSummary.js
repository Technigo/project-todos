import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'

export const TodoSummary = () => {
  const items = useSelector(store => store.todos.items)
  const tasksDone = items.filter(item => item.done).length

  return (
    <DetailsContainer>
      <CompleteCount>{tasksDone}/{items.length} done</CompleteCount>
      <DateToday>{moment().format('ddd')} {moment().format("MMM Do")}</DateToday>
    </DetailsContainer>
  )
}

const DetailsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 15px auto;
  border-top: 2px dotted #ce745a;
`

const CompleteCount = styled.p`
  color: #3e3e2d;
  font-weight: bold;
`

const DateToday = styled.p`
  color: #3e3e2d;
  font-size: 1em;
  font-weight: bold;
`