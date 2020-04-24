import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'lib/Container'
import { Title, Subtitle } from 'lib/Text'
import moment from 'moment'
import styled from 'styled-components'

const Header = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
`

export const TodoSummary = (props) => {
  const today = props
  // Get list information from the store, for this list
  const list = useSelector(store => store.todos.list)

  // Count the number of items that are done using filter
  const numDone = list.items.filter(item => item.done).length

  return (
    <Container>
      <Header>
        <Title color='#24292e'>Get stuff done</Title>
        <Subtitle color='#24292e'>{moment(today).format('MMM Do YYYY')}</Subtitle>
      </Header>
      <Subtitle color='#888' margin='5px 0px 11px 0px'>{numDone} done / {list.items.length} to go</Subtitle>
    </Container>
  )
}