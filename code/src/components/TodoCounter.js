import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const TodoCounter = () => {
  const taskList = useSelector((store) => store.tasks.tasksArray);
  const leftTodos = taskList.filter((task) => task.isCompleted === false)
  if (leftTodos.length > 0) {
    return (
      <CounterWrapper>
        <div className="tasks-left-wrapper">Left todo:{leftTodos.length}/{taskList.length}</div>
      </CounterWrapper>
    );
  } else if (leftTodos.length === 0) {
    return (
      <CounterWrapper>
        <div className="no-left">
          Add a todo
        </div>
        <div className="no-left" />
      </CounterWrapper>
    )
  }
};
export default TodoCounter;

const CounterWrapper = styled.div`
position: relative;


.tasks-left-wrapper{
padding: 10px;
position: absolute;
right: 20px;
top: 370px;
font-weight: 500;

}

.no-left{
color: transparent;
}
`

// @media (min-width: 667px) and (max-width: 1024px) {
// }
// @media (min-width: 1025px) {
// }
// `