import React from 'react';
import { useDispatch } from 'react-redux';

import { todos } from '../reducers/todos';
import { SectionDeleteButton, StyledInput } from '../styledComponents/styled_components';

export const ClearAllButton = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(todos.actions.clearAll()
    )
  };

  return (
    <SectionDeleteButton className='clear-all-container'>
      <StyledInput className='clear-all-button' onClick={handleOnClick}
        type='submit'
        value='Clear all'
        aria-label='{ClearButton}'
      ></StyledInput>
    </SectionDeleteButton>
  )
};


