import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'lib/Container'
import { Title, Subtitle } from 'lib/Text'


export const TodoSummary = () => {
  // Get list information from the store, for this list
  const list = useSelector(store => store.todos.list)

  // Count the number of items that are done using filter
  const numDone = list.items.filter(item => item.done).length

  return (
    <Container>
      <Title color='#24292e'>Get stuff done</Title>
      <Subtitle color='#888'>{numDone} done / {list.items.length} to go</Subtitle>
    </Container>
  )
}