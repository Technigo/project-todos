import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

export const TodoItem = (props) => {
  return (
    <>
      <ListItem>
        <ListItemText primary={props.task} />
      </ListItem>
      <Divider />
    </>
  );
};
