import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogActions, DialogContent } from "@material-ui/core";

import todos from "../../reducers/todos";
import { ClearAllButton, DialogButton } from "../../styledcomponents/StyledButtons";
import { ButtonContainer, DialogContainer } from "../../styledcomponents/StyledTaskList";


export const ClearButtons = () => {
  const [open, setOpen] = useState(false);
  const [openCompleted, setOpenCompleted] = useState(false);
  const completed = useSelector((state) => state.todos.tasks.filter(task => task.isComplete === true));
  const dispatch = useDispatch();

  const onClearAllDialog = () => {
    setOpen(!open);
  };

  const onClearCompletedDialog = () => {
    setOpenCompleted(!openCompleted);
  };

  const onClearAll = () => {
    dispatch(todos.actions.removeAllTasks());
    onClearAllDialog();
  };

  const onClearCompleted = () => {
    dispatch(todos.actions.removeCompletedTasks());
    onClearCompletedDialog();
  };

  return (
    <ButtonContainer>
      <ClearAllButton onClick={onClearAllDialog}>Clear all</ClearAllButton>
        <Dialog open={open} onClose={onClearAllDialog}>
          <DialogContainer>
            <DialogContent>Are you sure you want to delete all tasks?</DialogContent>
            <DialogActions>
              <DialogButton onClick={onClearAllDialog}>Cancel</DialogButton>
              <DialogButton onClick={onClearAll}>Yes, delete all!</DialogButton>
            </DialogActions>
          </DialogContainer>
        </Dialog>
      <ClearAllButton onClick={onClearCompletedDialog} disabled={completed.length === 0}>Clear completed</ClearAllButton>
        <Dialog open={openCompleted} onClose={onClearCompletedDialog}>
          <DialogContainer>
            <DialogContent>Are you sure you want to delete all completed tasks?</DialogContent>
            <DialogActions>
              <DialogButton onClick={onClearCompletedDialog}>Cancel</DialogButton>
              <DialogButton onClick={onClearCompleted}>Yes, delete!</DialogButton>
            </DialogActions>
          </DialogContainer>
        </Dialog>
    </ButtonContainer>
  )
};

