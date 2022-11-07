import React from 'react';
import styled from 'styled-components'
import { useSelector } from 'react-redux';

const Counter = () => {
  const TodoCounter = useSelector((store) => store.todo.items.length);
  return (
    <CounterWrapper>
      <CounterInfo>We have {TodoCounter} missions to complete</CounterInfo>
    </CounterWrapper>
  )
}

export default Counter;

const CounterWrapper = styled.div`
position: relative;
`
const CounterInfo = styled.p`
position: relative;
width: 100%;
`