import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'League Spartan', sans-serif;
  font-size: 1.5rem;
  `

export const Counter = () => {
  const items = useSelector((store) => store.tasks.items)
  // useSelect-hook by getting the items array in the store
  const completedTasks = items.filter((task) => task.isDone);
  // filtering the items array to get only the completed tasks

  const Alldone = () => {
    if (items.length === completedTasks.length) {
      return ` ${completedTasks.length} / ${items.length}`
    } else {
      return `${completedTasks.length} / ${items.length} done`
    }
  }
  // Alldone-function that displays the number of completed tasks with the numer of tasks in total.

  return (
    <CounterWrapper>
      <p className={items.length < completedTasks.length}>
        {Alldone()}
      </p>
    </CounterWrapper>
  )
}