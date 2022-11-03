import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const TodoCounter = () => {
  const taskList = useSelector((store) => store.tasks.tasksArray);
  const leftTodos = taskList.filter((task) => task.isCompleted === false)
  if (leftTodos.length > 0) {
    return (
      <CounterWrapper>
        <div className="tasks-left-wrapper">{leftTodos.length}/{taskList.length} left! </div>
      </CounterWrapper>
    );
  } else if (leftTodos.length === 0) {
    return (
      <CounterWrapper>
        <div className="tasks-left-wrapper">
          No to-dos!
        </div>
      </CounterWrapper>
    )
  }
};
export default TodoCounter;

const CounterWrapper = styled.div`
margin-left: auto;
border: solid 2px black;

.tasks-left-wrapper{
padding: 10px;

}
`

// @media (min-width: 667px) and (max-width: 1024px) {
// }
// @media (min-width: 1025px) {
// }
// `