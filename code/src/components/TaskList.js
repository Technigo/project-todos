import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import { tasks } from 'reducers/tasks';

export const TaskList = () => {
  // Get all the tasks currently in the store:
  const allTasks = useSelector((store) => store.tasks.taskData);

  // use dispatch here??
  const dispatch = useDispatch();

  // function for toggle
  const isCompleteToggle = (task) => {
    dispatch(tasks.actions.toggleItem(task));
  }
  // function for delete
  const deleteTask = (task) => {
    dispatch(tasks.actions.removeToDo(task));
  }

  return (
    <section>
      {allTasks.map((task) => (
        <TaskItem key={task.id}>
          <input
            type="checkbox"
            checked={task.complete}
            onChange={() => isCompleteToggle(task.id)} />
          <TaskText>{task.text}</TaskText>
          <button type="button" onClick={() => deleteTask(task.id)}>X</button>
        </TaskItem>
      ))}
    </section>
  )
}

const TaskText = styled.div`
  color: white;
  display: inline-block;
  width: 80%;
  padding: 0.7rem;
  border-radius: 50px;
  background-color: purple;
`
const TaskItem = styled.div`
  border: 3px solid #1F9D6E;
  width: 95%;
  border-radius: 50px;
  margin: 0.5rem 0;
`