import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CounterText = styled.p`
  font-size: 1em;
  display: flex;
`

export const Counter = () => {
  const taskList = useSelector((store) => store.tasks.items)
  const completedTasks = taskList.filter((task) => task.isCompleted);

  const doneTasks = () => {
    if (taskList.length === 0) {
      return ''
    } else if (taskList.length === completedTasks.length) {
      return (
        <p>Done today too</p>
      )
    } else {
      return `${completedTasks.length} / ${taskList.length} done`
    }
  }
  return (
    <CounterText>
      {doneTasks()}
    </CounterText>
  )
}