import React from 'react';
import styled from 'styled-components';

const EmptyList = () => {
  return (
    <EmptySection>
      <p>Do it another day</p>
    </EmptySection>
  );
};

export default EmptyList;

const EmptySection = styled.section`
  height: 40vh;
`;
