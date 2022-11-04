import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
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

  // Function for completing all tasks when 'Complete all' button is clicked
  const completeAll = () => {
    allTasks.forEach(() => {
      dispatch(tasks.actions.completeAllItems())
    })
  };

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
      <FlexContainerBtn>
        <Actionbtn
          // align="flex-end"
          color="#4C9173"
          type="button"
          onClick={() => completeAll()}>
        Complete all
        </Actionbtn>
        <Actionbtn
          // align="flex-start"
          color="#906387"
          type="button"
          onClick={() => deleteAll()}>
        Remove all
        </Actionbtn>
      </FlexContainerBtn>
    </Wrapper>
  )
};

// STYLING FOR ABOVE COMPONENT
const FlexContainerBtn = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
`