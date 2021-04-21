import { TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Select, MenuItem , InputLabel, FormControl } from '@material-ui/core';
import { makeStyles } from "@material-ui/styles"

import todos from '../reducers/todos'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: "10px"
    }, containter: {
        display: "flex",
        justifyContent: "space-between"
    },  select: {
        marginRight: "10px",
        minWidth: 275,
    }, input: {
        minWidth: 275,
        marginBottom: "10px"
    }
   
  });

const AddNewTodo = () => {
    const classes = useStyles()

    //adding a new todo to be fist saved in local state
    //this data will be passed on to the global store through dispatch
    
    const [newTodo, setNewTodo] = useState ('')
    const [category, setCategory] = useState ('')
    const dispatch = useDispatch()

    // Function that is triggered when user click on submit new todo
    // This till dipatch to the reducer, "addToDo".
    //I want to send the data regaring the new to do, to our global state
    //So it is passs the payload,an object containeing the new-task-data
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("hej")
         //gives us a unique id
        dispatch(todos.actions.addToDo({
            id: Date.now(),
            description: newTodo,
            iscomplete: false,
            category: category
        }))
 
        //clearing input field on submit
        setNewTodo('') 
    }

    return (
        <div className={classes.root}>
            <h3>Add new todo: </h3>
            <form onSubmit={handleSubmit}>
                <TextField 
                className={classes.input}
                id="outlined-basic" 
                label="I need to" 
                variant="outlined" 
                onChange={event => setNewTodo(event.target.value)}
                value={newTodo}
                required
                />
            </form>
            <div className={classes.containter}>
            <FormControl className={classes.select}variant="filled">
                <InputLabel>Select category</InputLabel>
                <Select name={'category'} value={category} onChange={event => setCategory(event.target.value)}>
                    <MenuItem value={"Studies and work"}>Studies and work</MenuItem>
                    <MenuItem value={"Training and health"}>Training and health</MenuItem>
                    <MenuItem value={"Admin stuff"}>Admin stuff</MenuItem>
                    <MenuItem value={"Other"}>Other</MenuItem>
                </Select>
            </FormControl>
            <Button type="submit" onClick={handleSubmit}variant="contained">Add</Button> 
            </div>  
        </div>
    )
}

export default AddNewTodo
