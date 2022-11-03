import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { Wrapper } from 'styles/GlobalStyles';

export const Header = () => {
  return (
    <Wrapper>
      <Title>To Do List</Title>
      <h3>{moment().format('dddd, Do MMMM YYYY')}</h3>
    </Wrapper>
  )
}

// STYLING FOR ABOVE COMPONENT

const Title = styled.h1`
  align-self: center;
`