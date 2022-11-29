import React from 'react';
import styled from 'styled-components';
import Empty from '../assets/EmptyState.svg';

const EmptyState = () => {
  return (
    <Wrapper>
      <StyledImg src={Empty} alt="Add a task to the list" />
    </Wrapper>
  );
};

export default EmptyState;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledImg = styled.img`
  width: 70%;
  padding-top: 45px;

  @media (min-width: 667px) and (max-width: 1024px) {
    width: 60%;
    padding-top: 90px;
  }

  @media (min-width: 1025px) {
    width: 45%;
    padding: 95px 0 60px 0;
  }
`;
