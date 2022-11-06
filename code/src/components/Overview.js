import React from 'react';
import styled from 'styled-components/macro';
import { Wrapper, Actionbtn } from 'styles/GlobalStyles';
import { tasks } from 'reducers/tasks';

export const Overview = ({ incomplete, allTasks, dispatch }) => {
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
      <h4>You have {incomplete} out of {allTasks.length} tasks to complete.</h4>
      <FlexContainerBtn>
        <Actionbtn
          color="#4C9173"
          type="button"
          onClick={() => completeAll()}>
        Complete all
        </Actionbtn>
        <Actionbtn
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