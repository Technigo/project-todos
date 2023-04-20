import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CounterText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  display: flex;
`

export const Counter = () => {
  const items = useSelector((store) => store.tasks.items)
  const completedTasks = items.filter((task) => task.complete);

  const doneTasks = () => {
    if (items.length === 0) {
      return 'Add task'
    } else if (items.length === completedTasks.length) {
      return 'All done'
    } else {
      return `${completedTasks.length} / ${items.length} done`
    }
  }
  return (
    <CounterText>
      {doneTasks()}
    </CounterText>
  )
}