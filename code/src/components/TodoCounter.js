import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const TodoCounter = () => {
  const taskList = useSelector((store) => store.tasks.tasksArray);
  const leftTodos = taskList.filter((task) => task.isCompleted === false)
  if (leftTodos.length > 0) {
    return (
      <CounterWrapper>
        <div className="tasks-left-wrapper">{leftTodos.length} to-dos left! </div>
      </CounterWrapper>
    );
  } else if (leftTodos.length === 0) {
    return (
      <CounterWrapper>
        <div className="tasks-left-wrapper">
          No more to-dos! Take a break or add some new!
        </div>
      </CounterWrapper>
    )
  }
};
export default TodoCounter;

const CounterWrapper = styled.div`
display: block-inline;
border: solid 2px blue;
margin-left: auto;
// justify-content: center;

.tasks-left-wrapper{
border: solid 5px green;
}
`

// @media (min-width: 667px) and (max-width: 1024px) {
// }
// @media (min-width: 1025px) {
// }
// `