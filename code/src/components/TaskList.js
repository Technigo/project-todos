import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import styled from 'styled-components/macro'

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);

  const dispatch = useDispatch();

  const onTaskCheckedToggle = (id) => {
    dispatch(tasks.actions.toggleChecked(id));
  }
  return (
    <>
      {taskList.map((task) => {
        return (
          <TaskListContainer>
            <input
              type="checkbox"
              checked={task.isChecked}
              onChange={() => onTaskCheckedToggle(task.id)}
              id={task.id} />
            <label htmlFor={task.id}>{task.taskDescription}</label>
          </TaskListContainer>
        )
      })}
    </>
  )
}

export default TaskList;

const TaskListContainer = styled.div`
  background-color: grey;
`

/* {
        id: '',
        taskDescription: '',
        isChecked: false
      } */