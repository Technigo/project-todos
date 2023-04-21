import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { tasks } from '../reducers/tasks';
import { Button } from './Button';
import { Counter } from './Counter';

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 2rem;
    padding-top: 2rem;
    padding-bottom: 1rem;
    `

const HeaderTitle = styled.h1`
    font-size: 3rem;
    text-align: center;
    `

export const Header = () => {
  const dispatch = useDispatch();

  const clearTasks = () => {
    dispatch(tasks.actions.clearTasks());
  }

  return (
    <HeaderWrapper>
      <HeaderTitle>Todo</HeaderTitle>
      <Button type="button" onClick={clearTasks}>Clear all</Button>
      <Counter />
    </HeaderWrapper>
  )
}