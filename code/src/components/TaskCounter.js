import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components';

const TodoCount = () => {
  const todoCounter = useSelector((store) => store.tasks.items.length)
  const completeTodo = useSelector(
    (store) => store.tasks.items.filter((item) => item.isDone)
  );

  return (
    <Counter>
          &quot;{completeTodo.length} out of {todoCounter} is done&quot;
    </Counter>
  );
};

export default TodoCount;

const Counter = styled.p`
  color: var(--primary);
  margin: 0;

  @media (min-width: 600px) and (max-width: 900px){
    font-size: 21px;
  }

@media (min-width: 901px){
    font-size: 25px;
}
`