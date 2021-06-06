import { ListItem, makeStyles, Checkbox, Card } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import { useDispatch } from "react-redux";

import todos from "../reducers/todos";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "10px",
  },
  list: {
    display: "flex",
    justifyContent: "space-between",
  },
  checkbox: {
    color: "#FF0066",
  },
  delete: {
    color: "#FF0066",
  },
});

// Den ska ta emot todo desciption:

const TodoItem = ({ description, isComplete, id }) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <ListItem className={classes.list} key={id}>
        <Checkbox
          className={classes.checkbox}
          type="checkbox"
          checked={isComplete}
          //Dispatch, enables us to send an action toogle with an argument(the id of the task), to update the store
          onChange={() => dispatch(todos.actions.toggleDone(id))}
        />
        <p
          className={classes.text}
          style={{ textDecoration: isComplete ? "line-through" : "" }}
        >
          {description}
        </p>
        <DeleteIcon
          className={classes.delete}
          type="button"
          onClick={() => dispatch(todos.actions.removeTodo(id))}
        />
      </ListItem>
    </Card>
  );
};

export default TodoItem;
