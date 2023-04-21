import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 1.5rem;
  `

export const Counter = () => {
  const items = useSelector((store) => store.tasks.items)
  const completedTasks = items.filter((task) => task.isDone);

  const Alldone = () => {
    if (items.length === completedTasks.length) {
      return `${completedTasks.length} / ${items.length}`
    } else {
      return `${completedTasks.length} / ${items.length} done`
    }
  }

  return (
    <CounterWrapper>
      <p className={items.length < completedTasks.length ? 'complete-todo' : ''}>
        {Alldone()}
      </p>
    </CounterWrapper>
  )
}