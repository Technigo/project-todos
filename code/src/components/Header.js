import React from 'react';
import styled from 'styled-components';
const moment = require('moment');

const StyledHeader = styled.div`
  margin: 0.8rem 0 0 1rem;
  /* color: rgba(230, 0, 60, 1); */
  height: 70px;
  font-size: 1.3rem;
  font-weight: bold;
`;

const Title = styled.p``;

const Date = styled.p`
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.8rem;
`;

export const Header = () => {
  let time = moment().format('MMMM Do');

  return (
    <StyledHeader>
      <Title>Todo</Title>
      <Date>{time}</Date>
    </StyledHeader>
  );
};
