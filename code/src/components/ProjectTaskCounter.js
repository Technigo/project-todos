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

export const ProjectTaskCounter = ({ listIndex }) => {
  const list = useSelector((state) => state.tasksproject.lists[listIndex]);
  const completed = list.filter((task) => task.complete);

  const doneTasks = () => {
    if (list.length === 0) {
      return ''
    } else if (list.length === completed.length) {
      return (
        <p>All done</p>)
    } else {
      return `${completed.length} / ${list.length} done`
    }
  }
  return (
    <CounterText>
      {doneTasks()}
    </CounterText>
  )
}