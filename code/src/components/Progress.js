import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const ProgressStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: lightslategray;
  font-style: italic;

  @media (max-width: 375px) {
    font-size: 14px;
  }
`

const Progress = () => {
  const items = useSelector((store) => store.quests.items)

  return (
    <ProgressStyled>
      <p>Todo: {items.filter((item) => item.status === 'todo').length} </p>
      <p>
        In Progress:{' '}
        {items.filter((item) => item.status === 'in progress').length}
      </p>
      <p>
        Completed: {items.filter((item) => item.status === 'completed').length}
      </p>
    </ProgressStyled>
  )
}

export default Progress
