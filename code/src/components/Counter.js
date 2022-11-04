import React from 'react';
import styled from 'styled-components'
import { useSelector } from 'react-redux';

const Counter = () => {
  const TaskCount = useSelector((store) => store.todo.items.length);
  return (
    <CounterWrap>
      <CounterText>You have {TaskCount} tasks today</CounterText>
    </CounterWrap>
  )
}

export default Counter;

const CounterWrap = styled.div`
display: flex;
position: relative;
right: 121%;
top: 128px;
`
const CounterText = styled.p`
position: relative;
width: 300px;
height: 20px;
margin: 0 auto;
color: white;
`
