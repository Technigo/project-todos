import React from "react";
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { IconButton } from "./IconButton";

export const CheckedTodoIcon = ({ onClick, isDone }) => {
  return (
    <IconButton onClick={onClick}>
      {isDone 
        ? <CheckBoxIcon /> 
        : <CheckBoxOutlineBlankIcon />}
    </IconButton>
  );
};
