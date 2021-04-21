import React from 'react'
import { useDispatch } from 'react-redux'
import todos from '../reducers/todos'
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/styles"
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles({
    button: {
        backgroundColor: "lightblue",
        color: "black"
    }
  });
  

function ClearTodo() {
    const classes = useStyles();
    //To be able to dispatch the action (changes) we want to do with the todos, we need to create dispatch hook
    const dispatch = useDispatch()

    return (
        <div>
            <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<CheckIcon />}
        className={classes.button} type="submit" variant="contained" onClick={() => dispatch(todos.actions.removeAll())}>
            Clear todos </Button>  
        </div>
    )
}

export default ClearTodo
