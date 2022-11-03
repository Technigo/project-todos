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
  }

  return (
    <OverviewWrapper>
      <FlexContainerText>
        <h4>You have {toBeDone} out of {allTasks.length} tasks to do.</h4>
        {/* <p> to be completed</p> */}
      </FlexContainerText>
      <FlexContainerBtn>
        <Actionbtn
          align="flex-end"
          color="#4C9173"
          type="button"
          onClick={() => completeAll()}>
        Complete all
        </Actionbtn>
        <Actionbtn
          align="flex-end"
          color="#906387"
          type="button"
          onClick={() => deleteAll()}>
        Remove all
        </Actionbtn>
      </FlexContainerBtn>
    </OverviewWrapper>
  )
}

// STYLING FOR ABOVE COMPONENT
const OverviewWrapper = styled(Wrapper)`
  //display: flex;
  //align-items: center;
  //justify-content: space-between;
  //flex-direction: column;
  // flex-wrap: wrap;
  //border: 2px solid blue;
`

const FlexContainerText = styled.div`
  /* width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 0.2rem; */
  //border: 2px solid blue;
`

const FlexContainerBtn = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 30%;
  align-items: flex-start; */
  //border: 2px solid blue;
`