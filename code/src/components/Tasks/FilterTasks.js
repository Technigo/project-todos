import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { FlexRow } from 'reusable-components/Container';
import { Button } from 'reusable-components/Button';
import { tasks } from 'reducers/tasks';

export const FilterTasks = () => {
  const allTasks = useSelector((store) => store.tasks.tasks);
  const ongoingTasks = allTasks.filter((item) => item.completed === false);
  const completedTasks = allTasks.filter((item) => item.completed === true);
  const dispatch = useDispatch();

  const filterOngoingTasks = () => {
    console.log(ongoingTasks)
    dispatch(tasks.actions.filterOn({ filter: 'ongoing' }))
  }

  const filterCompletedTasks = () => {
    dispatch(tasks.actions.filterOn({ filter: 'completed' }))
  }

  const filterAllTasks = () => {
    dispatch(tasks.actions.filterOn({ filter: 'all' }))
  }

  const completeAllTasks = () => {
    dispatch(tasks.actions.checkItem({ id: null }))
  }

  return (
    <FlexRow>
      <Button filtering onClick={filterAllTasks}>All tasks</Button>
      <Button filtering onClick={filterOngoingTasks}>Ongoing ({ongoingTasks.length})</Button>
      <Button filtering onClick={filterCompletedTasks}>Done ({completedTasks.length})</Button>
      <Button filtering onClick={completeAllTasks}>Complete all</Button>
    </FlexRow>
  )
}