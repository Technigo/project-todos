/* eslint-disable max-len */
import React from 'react'
import { useSelector } from 'react-redux'
import { Styled } from './Counter.styled';

export const Counter = () => {
  const allTasks = useSelector((store) => store.tasks.items);
  const completedTasks = allTasks.filter((items) => items.isCompleted === true)
  if (allTasks.length !== completedTasks.length) {
    return (
      <Styled.Heading>You have completed {completedTasks.length}/{allTasks.length} tasks</Styled.Heading>
    )
  } else {
    return (
      <Styled.Heading>Got something you need to do?</Styled.Heading>
    )
  }
}