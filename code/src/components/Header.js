import React from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from '../reducers/tasks';
import { Button } from './styles/Button';
import { Counter } from './Counter';
import { HeaderWrapper, HeaderTitle } from './styles/HeaderStyles';

export const Header = () => {
  const dispatch = useDispatch();
  // useDispatch hook used in the clearTask function below

  const clearTasks = () => {
    dispatch(tasks.actions.clearTasks());
  }
  // clearTask function calls the clearTasks-reducerfunction in the store.
  return (
    <HeaderWrapper>
      <HeaderTitle>Stuff to do</HeaderTitle>
      <Button type="button" onClick={clearTasks}>Clear all</Button>
      <Counter />
    </HeaderWrapper>
  )
}