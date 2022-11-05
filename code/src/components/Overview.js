import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Wrapper, Actionbtn } from 'styles/GlobalStyles';
import { tasks } from 'reducers/tasks';

export const Overview = () => {
  const allTasks = useSelector((store) => store.tasks.taskData);
  let toBeDone = 0;
  const dispatch = useDispatch();

  // For every task in the store that is not completed, increase counter by 1
  allTasks.forEach((task) => {
    if (!task.complete) {
      toBeDone += 1
    }
  });

  // Function for deleting all tasks when 'Remove all' button is clicked
  const deleteAll = () => {
    const userConfirm = window.confirm('Are you sure you want to remove all tasks?')
    if (userConfirm) {
      dispatch(tasks.actions.removeAll());
    }
  };

  return (
    <Wrapper>
      <h4>You have {toBeDone} out of {allTasks.length} tasks to do.</h4>
      <Actionbtn
        color="#906387"
        type="button"
        onClick={() => deleteAll()}>
        Remove all
      </Actionbtn>
    </Wrapper>
  )
};