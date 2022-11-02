import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import styled from 'styled-components/macro'
import { filters } from './TaskFilters';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const filter = useSelector((store) => store.tasks.filteredBy);

  const dispatch = useDispatch();

  const handleTaskCheckedToggleChange = (id) => {
    dispatch(tasks.actions.toggleChecked(id));
  }

  const handleRemoveTaskClick = (id) => {
    dispatch(tasks.actions.removeTask(id));
  }

  const filteredTasksList = () => {
    if (filter === filters.COMPLETED) {
      return taskList.filter((task) => task.isChecked)
    } else if (filter === filters.NOT_COMPLETED) {
      return taskList.filter((task) => !task.isChecked)
    } else {
      return taskList;
    }
  }
  return (
    <>
      {filteredTasksList().map((task) => {
        return (
          <TaskListContainer>
            <input
              type="checkbox"
              checked={task.isChecked}
              onChange={() => handleTaskCheckedToggleChange(task.id)}
              id={task.id} />
            <label htmlFor={task.id}>{task.taskDescription}</label>
            <button type="button" onClick={() => handleRemoveTaskClick(task.id)}>-</button>
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