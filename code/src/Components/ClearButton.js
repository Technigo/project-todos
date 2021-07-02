import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { tasks } from "reducers/tasks";
import { dialogs } from "reducers/dialogs";

import { Dialog } from "Components/Dialog";

import "./removebuttons.css";

export const ClearButton = (props) => {
  const dispatch = useDispatch();
  const allDialogs = useSelector((store) => store.dialogs);

  const handleRemoveTask = (id) => {
    dispatch(dialogs.actions.openDialog());
    dispatch(tasks.actions.setTaskToDelete(id));
    // dispatch(tasks.actions.removeTask(id))
  };

  return (
    <>
      <button
        type="button"
        className="remove-task-btn"
        onClick={() => {
          handleRemoveTask(props.task.id);
        }}>
        <span className="remove-icon" role="button" aria-label="remove">
          -
        </span>
      </button>
      <Dialog
        title="Delete the task?"
        supportingText="This will delete the task permanently and you can not undo it."
        primaryBtnText="Delete"
        secondaryBtnText="Cancel"
        showDialog={allDialogs.dialog1} />
    </>
  );
};
