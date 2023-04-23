/* import { CheckBox } from '@mui/icons-material'; */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import styled from 'styled-components';

const TaskList = () => {
  /*  const handleCheck = () => { } */
  const taskList = useSelector((store) => store.tasks.items)
  const dispatch = useDispatch();

  /* const onDeleteSingleTaskClick = (id) => {
    dispatch(tasks.actions.deleteSingleTask(id));
  } */
  const onIsCheckedCheckboxToggle = (id) => {
    dispatch(tasks.actions.toggleIfTaskIsChecked(id)); // gör att checkboxen checkas i vid click
  }

  const TaskName = styled.span`
    ${({ isChecked }) => isChecked && 'text-decoration: line-through'};
  `;

  // style checkboxes så dom är innan task och rund
  // add counter
  return (
    <section>
      <ul>
        {taskList.map((singleTask) => {
          return (
            <li key={singleTask.id}>
              <h1>
                <TaskName isChecked={singleTask.isChecked}>
                  {singleTask.taskName}
                </TaskName>
                <label htmlFor={`task_with_id${singleTask.id}`}>
                  <input
                    id={`task_with_id${singleTask.id}`}
                    type="checkbox"
                    placeholder="Next To-Do"
                    value={singleTask.isChecked}
                    onChange={() => onIsCheckedCheckboxToggle(singleTask.id)} />
                </label>
              </h1>
            </li>
          );
        })}
      </ul>
    </section>
  )
}

export default TaskList;