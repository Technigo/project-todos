import React from 'react';
import styled from 'styled-components'
import { useSelector } from 'react-redux';

const Counter = () => {
  const TaskCount = useSelector((store) => store.todo.items.length);
  return (
    <CounterWrap>You have {TaskCount} tasks today</CounterWrap>
  )
}

export default Counter;

const CounterWrap = styled.div`
position: absolute;
padding-left: 45px;
top: 130px;
color: #ffff;

`

