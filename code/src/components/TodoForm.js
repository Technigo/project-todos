import React, { useState } from 'react'
import uniqid from 'uniqid'
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import TextField from '@material-ui/core/TextField';

import moment from 'moment'
import todos from '../reducers/todos'

const TodoForm = () => {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()

    const onFormSubmit = (e) => {
        e.preventDefault();

        if(value.length < 3) {
            alert("You can't leave the input field empty!")
        } else if (value.length > 2) {
            const newTodo = {
                id: uniqid(),
                description:value,
                isComplete:false,
                date: Date.now(),
                fromNow: moment().add(3, 'days').calendar(),
                addDue: false
            }
            dispatch(todos.actions.addTodo(newTodo));
        }
        setValue('')
    }

    return(
        <form className="form-section">
            <div className="text-field">
                <TextField 
                    type="text"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    label="+ Add Todo" 
                    variant="outlined"
                    fullWidth
                />
            </div>
            <div className="send-button">
                <Button
                    onClick={onFormSubmit}
                    variant="contained"
                    color="primary"
                    endIcon={<CloudUploadIcon />}
                >
                    ADD
                </Button>
            </div>
        </form>  
    )
}

export default TodoForm