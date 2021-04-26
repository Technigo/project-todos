import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, DialogActions, DialogContent } from "@material-ui/core";

import todos from "../../reducers/todos";
import { ClearAllButton, DialogButton } from "../../styledcomponents/StyledButtons";
import { ButtonContainer, DialogContainer, Buttons } from "../../styledcomponents/StyledTaskList";


export const ClearButtons = () => {
  const [open, setOpen] = useState(false);
  const completed = useSelector((state) => state.todos.tasks.filter(task => task.isComplete === true));
  const dispatch = useDispatch();

  const onToggleDialog = () => {
    setOpen(!open);
  };

  const onDeleteAll = () => {
    dispatch(todos.actions.removeAllTasks());
    onToggleDialog();
  };

  const onDeleteCompleted = () => {
    dispatch(todos.actions.removeCompletedTasks());
    onToggleDialog();
  };

  return (
    <ButtonContainer>
      <ClearAllButton onClick={onToggleDialog}>Delete all</ClearAllButton>
        <Dialog open={open} onClose={onToggleDialog}>
          <DialogContainer>
            <DialogContent>Are you sure you want to delete all tasks?</DialogContent>
            <DialogActions>
              <Buttons>
                <DialogButton onClick={onToggleDialog}>Cancel</DialogButton>
                <DialogButton onClick={onDeleteCompleted} disabled={completed.length === 0}>Only completed</DialogButton>
                <DialogButton onClick={onDeleteAll}>Yes, delete all!</DialogButton>
              </Buttons>
            </DialogActions>
          </DialogContainer>
        </Dialog>
      <ClearAllButton onClick={() => dispatch(todos.actions.setAllComplete())}>Complete all</ClearAllButton>
    </ButtonContainer>
  )
};

