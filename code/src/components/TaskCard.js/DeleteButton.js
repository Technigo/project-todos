import React, { useState } from "react";
import { Tooltip, Dialog, DialogActions, DialogContent } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { RemoveButton, DialogButton } from "../../styledcomponents/StyledButtons";
import { DialogContainer } from "../../styledcomponents/StyledTaskCard";

export const DeleteButton = ( { onClick }) => {
  const [open, setOpen] = useState(false);

  const onDeleteDialog = () => {
    setOpen(!open);
  };

  return (
    <>
      <Tooltip title="Delete" aria-label="delete">
        <RemoveButton onClick={onDeleteDialog}>
          <FontAwesomeIcon className="trash-icon" icon="trash-alt" />
        </RemoveButton>
      </Tooltip>
      <Dialog open={open} onClose={onDeleteDialog}>
        <DialogContainer>
          <DialogContent>Do you want to delete task?</DialogContent>
        <DialogActions>
          <DialogButton onClick={onDeleteDialog}>Cancel</DialogButton>
          <DialogButton onClick={onClick}>Yes, delete!</DialogButton>
        </DialogActions>
        </DialogContainer>
      </Dialog>
    </>
  )
}