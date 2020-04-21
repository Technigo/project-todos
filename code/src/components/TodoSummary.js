import React from 'react'
import styled from 'styled-components/macro'
import { useSelector } from 'react-redux'
import moment from 'moment'

const DetailsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 15px auto;
  border-top: 2px dotted #eaceca;
`

const Details = styled.p`
  margin: 15px auto;
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

  //Show how many are done if there are todos in the array, else only shows today's date
  return (
    <DetailsContainer>

      {items.length > 0 &&
        <Details>{tasksDone}/{items.length} done</Details>
      }

      <Details>{moment().format('ddd')} {moment().format("MMM Do")}</Details>

    </DetailsContainer>
  )
}