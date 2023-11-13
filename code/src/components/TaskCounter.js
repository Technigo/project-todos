import React from 'react';
import { useSelector } from 'react-redux';
import { CounterText } from './style/GlobalStyle';

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