import React from 'react';
import styled from 'styled-components';

const EmptyList = () => {
  return (
    <EmptySection>
      <h2>Nothing to do!</h2>
      <img src="https://i.gifer.com/ZIb4.gif" alt="Dancing Carlton" />
    </EmptySection>
  );
};

export default EmptyList;

const EmptySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40vh;

  & h2 {
    font-size: 1.5rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.65);
    margin-bottom: 20px;
  }

  & img {
    height: 25vh;
  }
`;
