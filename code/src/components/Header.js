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
    z-index: 2;
    position: relative;
    `

const HeaderTitle = styled.h1`
    font-size: 5rem;
    text-align: center;
    font-family: 'Paytone One', sans-serif;
    color: #444444;
    `

export const Header = () => {
  const dispatch = useDispatch();

  const clearTasks = () => {
    dispatch(tasks.actions.clearTasks());
  }

  return (
    <HeaderWrapper>
      <HeaderTitle>TODO</HeaderTitle>
      <Button type="button" onClick={clearTasks}>Clear all</Button>
      <Counter />
    </HeaderWrapper>
  )
}