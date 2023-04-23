import React from 'react';
import styled from 'styled-components';
import emptyImage from '../images/empty.png';

const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const EmptyListImage = styled.img`
  width: 50%;
  max-width: 400px;
  margin-bottom: 32px;
`;

const EmptyListText = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin: 0;
`;

export const EmptyList = () => {
  return (
    <EmptyListContainer>
      <EmptyListImage src={emptyImage} alt="No more todos" />
      <EmptyListText>There are no more todos left!</EmptyListText>
    </EmptyListContainer>
  );
};

/* To conditionally render the EmptyList component in the TasksList,
you can create a variable that checks if the tasksList is empty or not,
and use a ternary operator to conditionally render the EmptyList component if tasksList is empty. */
