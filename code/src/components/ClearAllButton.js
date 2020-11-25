import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { todos } from '../reducers/todos';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledInput = styled.input`
  padding: 8px;
  background: #ffca00;
  font-size: 16px;
  color: black; 
  margin-top: 30px;
  border: none;
  border-radius: 3px;
`;

export const ClearAllButton = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(todos.actions.clearAll()
    )
  };

  return (
    <Section className='clear-all-container'>
      <StyledInput className='clear-all-button' onClick={handleOnClick}
        type='submit'
        value='Clear all'
        aria-label='{ClearButton}'
      ></StyledInput>
    </Section>
  )
};


