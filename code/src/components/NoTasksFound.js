import React from 'react';
import styled from 'styled-components';

// Styling
import {
  OuterFlexWrapper,
  InfoText,
  AddTaskButton,
} from '../styling/GlobalStyling';

// -----------------------------------------------------------------------------

export const NoTasksFound = ({ setAddTaskVisible }) => {
  return (
    <NoTasksFoundWrapper>
      <img src="https://img.icons8.com/pastel-glyph/64/000000/checked--v2.png" />
      <NoTasksFoundHeading>No tasks!</NoTasksFoundHeading>
      <NoTasksFoundInfoText>
        Add some new tasks by clicking the button below.
      </NoTasksFoundInfoText>
      <NoTasksFoundAddButton onClick={() => setAddTaskVisible(true)}>
        + Add new task
      </NoTasksFoundAddButton>
    </NoTasksFoundWrapper>
  );
};

// Local styles -----------------------------
const NoTasksFoundWrapper = styled(OuterFlexWrapper)`
  height: 400px;
  justify-content: center;
  flex-direction: column;
`;

const NoTasksFoundAddButton = styled(AddTaskButton)`
  position: static;
  text-transform: uppercase;
  font-size: 12px;
  padding: 19px;
  margin-top: 20px;
  z-index: 0;
  font-weight: bold;
`;
const NoTasksFoundInfoText = styled(InfoText)`
  opacity: 1;
`;
const NoTasksFoundHeading = styled.h2``;
