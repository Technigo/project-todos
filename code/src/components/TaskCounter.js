import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

/* Counter component, it shows how many todos i completed, and how many are left.
we filter the tasks depening on if they are completed or not */

const TaskCounter = () => {
  const allTasks = useSelector((store) => store.tasks.items)

  const completedTasks = allTasks.filter((singleTask) => singleTask.complete)
  const tasksLeft = allTasks.filter((singleTask) => !singleTask.complete)

  return (
    <CompletedToDos>
      <StyledParagraph>Completed todos: {completedTasks.length} / {allTasks.length}
      </StyledParagraph>
      <StyledParagraph>Todos left: {tasksLeft.length}
      </StyledParagraph>
    </CompletedToDos>
  )
}

/* styling components */

const CompletedToDos = styled.article`
list-style:none;
text-decoration:none;
position:relative;
color:#000;
background:#ccf;
display:block;
height:13em;
width:13em;
padding:1em;
margin:1em;
box-shadow: 7px 7px 9px rgba(33,33,33,.7);
transform: rotate(-5deg);
transition: transform .15s linear;

&:hover {
  box-shadow:10px 10px 7px rgba(0,0,0,.7);
  transform: scale(1.15);
  position:relative;
  z-index:5;    
}

@media (min-width: 900px) {
  height:20em;
  width:20em;
}
`;

const StyledParagraph = styled.h2`
  font-family: 'Reenie Beanie';

  @media (min-width: 900px) {
    font-size: 2rem;
  }
`;

export default TaskCounter;