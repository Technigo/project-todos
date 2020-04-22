import React from 'react';
import { useDispatch } from 'react-redux';
import { todos } from '../reducers/todos';
import { DeleteButton } from '../lib/Buttons'
import swal from 'sweetalert';

export const ClearButton = ({projectName}) => {
  const dispatch = useDispatch();

  const onClickedRemoved = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this project!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your project has been deleted!", {
          icon: "success",
        });
        dispatch(todos.actions.removeAllTodos({
          projectName
         }));
      } else {
        swal("Your project is safe!");
      }
    });
  };

  return (
    <div>
      <DeleteButton
        type='button'
        onClick={onClickedRemoved}
      >
        DELETE PROJECT
      </DeleteButton>
    </div>
  )
}