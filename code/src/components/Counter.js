import React from 'react'
import styled from 'styled-components'
import COLORS from './Colors'

const Counter = ({ items, display }) => {
  console.log(items)
  const incompleteItems = items.filter(todo => !todo.isComplete)

  return (
    <CounterText>
      {display === 'remaining' &&
      `${incompleteItems.length} of ${items.length} tasks remaining`}
      {display === 'finished' &&
      `${items.length-incompleteItems.length} finished tasks `}
    </CounterText>
    )
}

const CounterText = styled.h3`
  color: ${COLORS.midGrey};
  margin: 24px 42px;
  font-size: 14px;
  font-weight: 400;
`

export default Counter
