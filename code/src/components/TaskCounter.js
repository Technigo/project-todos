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
color: #046582;
margin: 0;
/*display: inline-block;
text-align: right;

 margin-bottom: 30px; */
`

/*   const counter = useSelector((store) => store.todos.items.length);

  const completed = useSelector((store) =>
    store.todos.items.filter((item) => item.isComplete)
  );

  return (
    <>
      <CompletedWrapper>
        <CompletedText>
          Completed {completed.length}/{counter} tasks
        </CompletedText>
      </CompletedWrapper>
    </>
  ); */