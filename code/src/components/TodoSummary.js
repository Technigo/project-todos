import React from 'react'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'
import moment from 'moment'

const DetailsContainer = styled.section`
display: flex;
justify-content: ${props => props.itemsLength > 0 ? 'space-between' : 'center'};
width: 90%;
margin: 15px auto;
border-top: 2px dotted #b55136;
`

const Details = styled.p`
color: #3e3e2d;
font-family: 'Playfair Display';
font-size: 1em;
font-weight: bold;

@media (min-width: 768px) {
  font-size: 1.2em;
}
`

export const TodoSummary = () => {
  const items = useSelector(store => store.todos.items)
  const tasksDone = items.filter(item => item.done).length
  const itemsLength = items.length

  return (
    <DetailsContainer>
      {itemsLength > 0 &&
        <Details>{tasksDone}/{itemsLength} done</Details>
      }
      <Details>{moment().format('ddd')} {moment().format("MMM Do")}</Details>
    </DetailsContainer>
  )
}