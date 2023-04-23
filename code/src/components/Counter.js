/* eslint-disable linebreak-style */
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Counter = () => {
  const toDoCounter = useSelector((store) => store.tasks.items.length)
  const completeToDo = useSelector(
    (store) => store.tasks.items.filter((item) => item.isDone)
  );

  return (
    <CounterWrapper>
            &quot;You have cleared {completeToDo.length} out of {toDoCounter} today!&quot;
    </CounterWrapper>
  );
};

export default Counter;

const CounterWrapper = styled.p`
  color: var(--quinary);
  margin: 10px;
  font-size: 12px;
@media (min-width: 600px) and (max-width: 900px){
  font-size: 15px;
}
@media (min-width: 901px){
  font-size: 20px;
}
`