import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'lib/Container'
import { Title, Subtitle } from 'lib/Title'
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
  const items = useSelector(store => store.todos.items)

  // Count the number of items that are done using filter, now just showing todos left.
  const todosleft = items.filter(item => item.isCompleted).length
 
  return (
    <Container>
      <Header>
        <Title color='#24292e'>Happy Todos App</Title>
        <Subtitle color='#24292e'>{moment(today).format('MMM Do YYYY')}</Subtitle>
      </Header>
      <Subtitle color='#888'margin='5px 0px 11px 0px'> {items.length} happy todos left! </Subtitle>
    </Container>
  )
}