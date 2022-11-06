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
`

const StyledImg = styled.img`
  width: 300px;
  height: 150px;
`