import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CounterText = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: 1em;
  display: flex;
  margin: 0;
  color: #f85f36;
`

export const TaskCounter = () => {
  const items = useSelector((store) => store.tasks.items)
  const completed = items.filter((task) => task.complete);

  const doneTasks = () => {
    if (items.length === 0) {
      return ''
    } else if (items.length === completed.length) {
      return (
        <p>All done</p>)
    } else {
      return `${completed.length} / ${items.length} done`
    }
  }
  return (
    <CounterText>
      {doneTasks()}
    </CounterText>
  )
}