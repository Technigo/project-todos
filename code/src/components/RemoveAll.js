import React from 'react';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';

import { todos } from '../reducers1/todos';
import { RemoveAllButton } from './StyledComponents/ListStyling';

export const RemoveAll = () => { 
  const dispatch = useDispatch();

  const handleRemoveAll = () => {
    swal({
      title: 'DANGER ZONE! Are you sure you want to clear all tasks?',
      text: "Once cleared, you can't recover your list!",
      buttons: true,
      dangerMode: true,
      icon: "warning"
    })
    .then((willDelete) => {
      if (willDelete) {
        dispatch(
          todos.actions.removeAll()
        );
      };
    });
  };

  return (
    <RemoveAllButton onClick={handleRemoveAll}>Clear list</RemoveAllButton>
  )
};
