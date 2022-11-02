import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { Wrapper, Actionbtn } from 'styles/GlobalStyles';
import { tasks } from 'reducers/tasks';

export const Overview = () => {
  const allTasks = useSelector((store) => store.tasks.taskData);
  let toBeDone = 0;

  allTasks.forEach((task) => {
    if (!task.complete) {
      toBeDone += 1
    }
  });

  const dispatch = useDispatch();

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
  }

  return (
    allTasks.length > 0 && (
      <OverviewWrapper>
        <FlexItem>
          <h3>Your tasks</h3>
          <p>{toBeDone} / {allTasks.length} to be completed</p>
        </FlexItem>
        <FlexItem>
          <Actionbtn
            // align="flex-end"
            color="#1F9D6E"
            type="button"
            onClick={() => completeAll()}>
        Complete all
          </Actionbtn>
          <Actionbtn
            // align="flex-start"
            color="purple"
            type="button"
            onClick={() => deleteAll()}>
        Remove all
          </Actionbtn>
        </FlexItem>
      </OverviewWrapper>
    )
  )
}

// STYLING FOR ABOVE COMPONENT
const OverviewWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  //flex-direction: column;
  //flex-wrap: wrap;
`

const FlexItem = styled.div`
  width: 50%;
`