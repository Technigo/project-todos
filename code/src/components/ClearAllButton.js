import React from 'react';
import { useDispatch } from 'react-redux';

import swal from 'sweetalert';

import { todos } from '../reducers/todos';
import { SectionDeleteButton, StyledInput } from '../styledComponents/styled_components';

export const ClearAllButton = () => {
  const dispatch = useDispatch();
  
  const handleOnClick = () => {
    swal({
      title:'Clear my todos!',
      text:'Are you sure?',
      buttons: ['No!', 'Oh yes!'], 
      dangerMode: true,
    })
      .then((willDelete) => {
          if (willDelete) {
    dispatch(todos.actions.clearAll())
          }
      });
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


