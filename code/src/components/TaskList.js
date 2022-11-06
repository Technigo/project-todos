/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/todos';
import styled from 'styled-components/macro';
import { OuterWrapper, InnerWrapper } from '../utils/GlobalStyle'
import trashBin from '../assets/trashBin.png'

const TaskList = () => {
  const dispatch = useDispatch();

  // gets the tasks fron the store
  const taskList = useSelector((store) => store.tasks.items);

  // fuction to set checkbox as complete or not, from todo reducer
  const onIsCompletedToggle = (id) => {
    dispatch(tasks.actions.toggleTask(id));
  }

  // function to delete task, from todo reducer
  const onDeleteTaskBtnClick = (taskIndex) => {
    dispatch(tasks.actions.deleteTask(taskIndex));
  }

  // Returns the entire section maps all of the separate tasks
  const functionForMap = (task, taskIndex) => {
    return (
      <InnerWrapper taskInner>
        <Task key={task.id}>
          <TaskText>{task.name}</TaskText>
          <CheckboxLabel htmlFor="Is the task finished?">
            <Checkbox type="checkbox" checked={task.isCompleted} onChange={() => onIsCompletedToggle(task.id)} />
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
margin-left: 5%;
`;

// Delete button
const DeleteBtn = styled.button`
width: 15%;
border: none;
background-color: inherit;
cursor: pointer;

@media (max-width: 350px) {
  width: 25%;
}

`;

// Trash bin Icon
const TrashBin = styled.img`
width: 100%;

:hover {
background-color: #e4f0f2;
border-radius: 50%;
}

`;

// custom checkbox
const CheckboxLabel = styled.label`
height: fit-content;
margin-top: 4%;

@media (max-width: 250px) {
  margin-top: 8%;
}
`;

const Checkbox = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: #ffff;
  margin: 0;
  font: inherit;
  // colour of circle
  color: #79b6c1;
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
  background:#e4f0f2;
}
::before {
  content: "";
  width: 1em;
  height: 1em;
  border-radius: 25px;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  // checkmark colour
  box-shadow: inset 1em 1em #79b6c1;
  transform-origin: bottom left;
  // Form och checkmark
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
}
:checked::before {
  transform: scale(1);
}
`;