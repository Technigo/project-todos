import React from "react";
import DoneIcon from "@material-ui/icons/Done";

import { IconButton } from "./IconButton";

export const DoneTodoIcon = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <DoneIcon />
    </IconButton>
  );
};
