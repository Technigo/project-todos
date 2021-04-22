import React from "react";
import { useDispatch, useSelector } from "react-redux";
import todos from "../reducers/todos";
import { ClearAllButton } from "../styledcomponents/StyledButtons";
import swal from "sweetalert";

import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ClearButtons = () => {
  const completed = useSelector((state) => state.todos.tasks.filter(task => task.isComplete === true));
  const dispatch = useDispatch();

  const onRemoveAll = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover your tasks!",
      icon: "warning",
      buttons: ["No, keep them!", "Yes, delete!"],
      dangerMode: true,
    })
    .then((confirm) => {
      if (confirm) {
      swal("Poof! Your tasks have been deleted!", {
        icon: "success",
      });
      dispatch(todos.actions.removeAllTasks());
      } else {
          swal("Your tasks are safe!");
        }
    });
  };

  const onRemoveCompleted = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover your tasks!",
      icon: "warning",
      buttons: ["No, keep them!", "Yes, delete!"],
      dangerMode: true,
    })
    .then((confirm) => {
      if (confirm) {
        swal("Poof! Your tasks have been deleted!", {
          icon: "success",
        });
      dispatch(todos.actions.removeCompletedTasks());
      } else {
          swal("Your tasks are safe!");
        }
    });
  };

  return (
    <ButtonContainer>
      <ClearAllButton onClick={onRemoveAll}>Clear all</ClearAllButton>
      <ClearAllButton onClick={onRemoveCompleted} disabled={completed.length === 0}>Clear completed</ClearAllButton>
    </ButtonContainer>
  )
};
