import React from 'react';
import { useSelector } from 'react-redux'
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    button: {
        color: "#FF0066",
        backgroundColor: "white",
        fontWeight: "bold"
    }
  });


const Counter = () => {
    const classes = useStyles()
    const items = useSelector((store) => store.todos.items)
    const leftTodo = items.filter(todo => todo.isComplete === false )

    return (
        <Button className={classes.button} variant="contained">{leftTodo.length} / {items.length} todos left
        </Button>
    )
}

export default Counter
