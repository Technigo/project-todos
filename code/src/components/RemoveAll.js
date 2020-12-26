import React from 'react';
import { useDispatch } from 'react-redux';
import { todos } from 'reducers/todos';
import styled from 'styled-components';
import Swal from "sweetalert2";

import { Button } from 'styling/Button';

const ButtonWrapper = styled.div`
  text-align:center;
`

export const RemoveAll = () => {
    const dispatch = useDispatch();
    const handleRemoveAll = () => {
      Swal.fire({
      title: "Do you want to remove all tasks?",
      text: "This action cannot be undone once all tasks are deleted",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "remove all",
      confirmButtonColor: "#93dece",
      confirmButtonAriaLabel: "yes",
      cancelButtonText: "keep tasks",
      cancelButtonColor: "#b83b5e",
      cancelButtonAriaLabel: "no",
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(todos.actions.removeAll())
      }
    });
  };

    return (
      <ButtonWrapper>
        <Button 
        onClick={handleRemoveAll} 
        >
        Clear tasks
        </Button>
      </ButtonWrapper>
    );
};