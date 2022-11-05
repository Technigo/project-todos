/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/todos';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper } from '../utils/GlobalStyle'
import trashBin from '../assets/trashBin.png'

const TaskList = () => {
  const dispatch = useDispatch();

  // gets the tasks fron the store
  const taskList = useSelector((store) => store.tasks.items);

  const onIsCompletedToggle = (id) => {
    dispatch(tasks.actions.toggleTask(id));
  }
  const onDeleteTaskBtnClick = (taskIndex) => {
    dispatch(tasks.actions.deleteTask(taskIndex));
  }
  const functionForMap = (task, taskIndex) => {
    return (
      <InnerWrapper taskInner>
        <Task key={task.id}>
          <TaskText>{task.name}</TaskText>
          <CheckboxLabel htmlFor="Is the task finished?">
            <Checkbox type="checkbox" checked={task.isCompleted} onChange={() => onIsCompletedToggle(task.id)} />
            <OwnCheckbox />
          </CheckboxLabel>
          <DeleteBtn className="ownStyle" onClick={() => onDeleteTaskBtnClick(taskIndex)} type="button">
            <TrashBin src={trashBin} alt="trash bin icon" />
          </DeleteBtn>
        </Task>
      </InnerWrapper>

    );
  }
  return (
    <OuterWrapper taskOuter>

      <section>
        {taskList.map((singleTask, index) => functionForMap(singleTask, index))}
      </section>

    </OuterWrapper>
  )
}

export default TaskList;

const Task = styled.article`
width: 100%;
display: flex;
`;

const TaskText = styled.p`
display: inline-block;
flex-basis: 80%;
`;

const DeleteBtn = styled.button`
width: 15%;
border: none;
background-color: inherit;
cursor: pointer;

`;

const TrashBin = styled.img`
width: 100%;

:hover {
background-color: #e4f0f2;
border-radius: 50%;
}

`;

const CheckboxLabel = styled.label`
height: fit-content;
`;

/* const Checkbox = styled.input`
visibility: hidden;

:hover {
  visibility: visible;
  background-color: red;
}
`; */

const OwnCheckbox = styled.span`
:hover {
  visibility: visible;
  background-color: red;
}
`;

export const Checkbox = styled.input`
  -webkit-appearance: none;
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: #79b6c1;
  /* Not removed via appearance */
  appearance: none;
  background-color: #79b6c1;
  margin: 0;
  font: inherit;
  color: grey;
  width: 1.60em;
  height: 1.60em;
  border: 0.15em solid currentColor;
  border-radius: 25px;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
.form-control + .form-control {
  margin-top: 1em;
}
&:hover {
  cursor: pointer;
  color: black;
}
::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  border-radius: 25px;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em white;
  transform-origin: bottom left;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}
:checked::before {
  transform: scale(1);
}
`;