import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const TaskCounterText = styled.p`
  font-size: em;
  display: flex;
  font-family: Garamond;
`

export const TaskCounter = () => {
  const taskList = useSelector((store) => store.tasks.items)
  const completedTasks = taskList.filter((task) => task.isCompleted);

  const tasksCompleted = () => {
    if (taskList.length === 0) {
      return ''
    } else if (taskList.length === completedTasks.length) {
      return (
        <p>All tasks completed</p>
      )
    } else {
      return `${completedTasks.length} / ${taskList.length} Completed`
    }
  }
  return (
    <TaskCounterText>
      {tasksCompleted()}
    </TaskCounterText>
  )
}