import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Checkbox } from '@material-ui/core'
import Divider from "@material-ui/core/Divider";
import { Delete } from '@material-ui/icons';

import { useDispatch } from "react-redux";
import { tasks } from "reducers/tasks";

export const TodoItem = (props) => {

    const dispatch = useDispatch();

    const handleDone = (e) => {
        console.log(props.index)
        dispatch(tasks.actions.markDone(props.index));
      }; 

      const handleRemove = (e) => {
          dispatch(tasks.actions.removeTask(props.index))
      }
  return (
    <>
      <ListItem>
        <Checkbox onChange={handleDone}>
        </Checkbox>
        <ListItemText primary={props.task} />
        <Delete onClick={handleRemove}/>
      </ListItem>
      <Divider />
    </>
  );
};
