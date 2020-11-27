import React from 'react';

import styled from 'styled-components';

// Styling
import { OuterFlexWrapper, InfoText } from '../styling/GlobalStyling';

// -----------------------------------------------------------------------------

export const NoTasksFound = () => {
  return (
    <NoTasksFoundWrapper>
      <NoTasksFoundHeading>No tasks!</NoTasksFoundHeading>
      <NoTasksFoundInfoText>
        Add a new task by clicking "+".
      </NoTasksFoundInfoText>
    </NoTasksFoundWrapper>
  );
};

// Local styles -----------------------------
const NoTasksFoundWrapper = styled(OuterFlexWrapper)`
  height: 400px;
  justify-content: center;
  flex-direction: column;
`;
const NoTasksFoundInfoText = styled(InfoText)`
  opacity: 1;
`;
const NoTasksFoundHeading = styled.h2``;
