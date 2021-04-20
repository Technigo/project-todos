import { TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';


import todos from '../reducers/todos'

const AddNewTodo = () => {

    //adding a new todo to be fist saved in local state
    //this data will be passed on to the global store through dispatch
    
    const [newTodo, setNewTodo] = useState ('')

    const dispatch = useDispatch()

    // Function that is triggered when user click on submit new todo
    // This till dipatch to the reducer, "addToDo".
    //I want to send the data regaring the new to do, to our global state
    //So it is passs the payload,an object containeing the new-task-data
    const handleSubmit = (event) => {
        event.preventDefault()

         //gives us a unique id
        dispatch(todos.actions.addToDo({
            id: Date.now(),
            description: newTodo,
            iscomplete: false,
        }))
 
        //clearing input field on submit
        setNewTodo('')
    }

    return (
        <div>
            <h3>Add new todo: </h3>
            <form onSubmit={handleSubmit}>
                <TextField 
                id="outlined-basic" 
                label="I need to" 
                variant="outlined" 
                onChange={event => setNewTodo(event.target.value)}
                value={newTodo}
                />
            <Button type="submit" variant="contained">Add</Button>   
            </form>
        </div>
    )
}

export default AddNewTodo
