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
      buttons: true,
      width: 500,
      dangerMode: true,
      icon: 'warning',
    }).then(willDelete => {
      if (willDelete) {
        dispatch(todos.actions.removeAll());
      }
    });
  };

  return (
    <button className='remove-all-button' onClick={handleRemoveAll}>
      Clear list
    </button>
  );
};
