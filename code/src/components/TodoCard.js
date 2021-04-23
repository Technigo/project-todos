import React from 'react'
import { useDispatch } from 'react-redux'
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';
import { Checkbox, Card } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles"

import todos from '../reducers/todos'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: "10px"
    },
    list: {
        display: "flex",
        justifyContent: "space-between",
    },
    checkbox: {
       color: "#FF0066",
    },
    delete: {
        color: "#FF0066"
    },
  });

function TodoCard({todo}) {
    const dispatch = useDispatch()

    const classes = useStyles()
  return (
    <div>
      <Card className={classes.root}>
        <ListItem className={classes.list} key={todo.id}>
          <Checkbox
            className={classes.checkbox}
            type="checkbox"
            checked={todo.isComplete}
            //Dispatch, enables us to send an action toogle with an argument(the id of the task), to update the store
            onChange={() => dispatch(todos.actions.toggleDone(todo.id))}
          />
          <p
            className={classes.text}
            style={{ textDecoration: todo.isComplete ? "line-through" : "" }}
          >
            {todo.description}
          </p>
          <DeleteIcon
            className={classes.delete}
            type="button"
            onClick={() => dispatch(todos.actions.removeTodo(todo.id))}
          />
        </ListItem>
      </Card>
    </div>
  );
}

export default TodoCard;
