import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import todos from '../reducers/todos';

export const RemoveAll = () => {
  const dispatch = useDispatch();

  const handleRemoveAll = () => {
    new Swal({
      title: 'Are you sure you want to clear all your tasks?',
      text: "Once cleared, you can't recover your list!",
      showCancelButton: true,
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel!',
      width: 500,
      dangerMode: true,
      icon: 'warning',
    }).then(willDelete => {
      if (willDelete.isConfirmed) {
        Swal.fire('Deleted!', '', 'success');
        dispatch(todos.actions.removeAll());
      } else if (willDelete.isDenied) {
        dispatch(todos.actions.items);
      }
    });
  };

  return (
    <button className='remove-all-button' onClick={handleRemoveAll}>
      Clear list
    </button>
  );
};
