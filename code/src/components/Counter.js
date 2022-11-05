import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Counter = () => {
  const TaskCount = useSelector((store) => store.tasks.items.length);
  return (
    <CounterContainer>You have {TaskCount} tasks to do.</CounterContainer>
  )
}

export default Counter;

export const CounterContainer = styled.section`
font-style: italic;
color: #936f63;
margin-left: 10px;
`