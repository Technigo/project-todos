import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { Wrapper } from 'styles/GlobalStyles';
import { tasks } from 'reducers/tasks';
import bin from 'assets/bin-icon.svg';

export const TaskList = () => {
  // Get all the tasks currently in the store:
  const allTasks = useSelector((store) => store.tasks.taskData);

  const dispatch = useDispatch();

  // Function for toggling the checkbox between checked and unchecked
  const isCompleteToggle = (task) => {
    dispatch(tasks.actions.toggleItem(task));
  }

  // Function for deleting a task from the list
  const deleteTask = (task) => {
    dispatch(tasks.actions.removeToDo(task));
  }

  // Display all the tasks currently in the store, with a checkbox and a delete button:
  return (
    <TaskListWrapper>
      {allTasks.map((task) => (
        <TaskItem key={task.id}>
          <input
            type="checkbox"
            checked={task.complete}
            onChange={() => isCompleteToggle(task.id)} />
          <TaskText>{task.text}</TaskText>
          <button type="button" onClick={() => deleteTask(task.id)}>
            <img src={bin} alt="" />
          </button>
        </TaskItem>
      ))}
    </TaskListWrapper>
  )
}

// STYLING FOR ABOVE COMPONENT
const TaskListWrapper = styled(Wrapper)`
  // min-height: 35vh;
`

const TaskText = styled.div`
  margin: 0 0.3rem;
  color: white;
  display: inline-block;
  width: 90%;
  padding: 0.7rem 0.7rem 0.7rem 1.5rem;
  border-radius: 3rem;
  background-color: purple;
`
const TaskItem = styled.div`
  display: flex;
  border: 3px solid #1F9D6E;
  width: 100%;
  border-radius: 50px;
  margin: 0.5rem 0;
`