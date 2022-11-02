import React from 'react';
import moment from 'moment';
import { Wrapper } from 'styles/GlobalStyles';

export const Header = () => {
  return (
    <Wrapper>
      <h1>ToDo List</h1>
      <h3>{moment().format('dddd, Do MMMM YYYY')}</h3>
    </Wrapper>
  )
}

// STYLING FOR ABOVE COMPONENT