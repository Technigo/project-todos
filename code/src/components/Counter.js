import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Counter = () => {
  const TaskCount = useSelector((store) => store.tasks.items.length);
  return (
    <CounterContainer>You have {TaskCount} tasks today.</CounterContainer>
  )
}

export default Counter;

export const CounterContainer = styled.section`
`