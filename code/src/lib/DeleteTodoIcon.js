import React from "react";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

import { IconButton } from "./IconButton";

export const DeleteTodoIcon = ({ onClick }) => {
  return (
    <IconButton onClick={onClick}>
      <DeleteOutlinedIcon />
    </IconButton>
  );
};



