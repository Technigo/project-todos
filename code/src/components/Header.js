import React from 'react';
import Moment from 'react-moment';
import styled from 'styled-components'

export const Header = () => {
  return (
    <div>
      <Title> To Do List</Title>
      <StyledMoment format="dddd, Do MMMM YYYY" />
    </div>
  )
};

const Title = styled.h1`
  text-align: center;
  font-family: 'Dongle', sans-serif;
  font-size: 4rem;
  margin-bottom: 0;
  line-height: 2rem;
`;

const StyledMoment = styled(Moment)`
  font-family: 'Dongle', sans-serif;
  font-size: 2rem;
  margin-top: 0;
  color: black;
`;
