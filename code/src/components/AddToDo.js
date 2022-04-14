import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import uniqid from 'uniqid'

import tasks from 'reducers/Tasks'

const AddTodo = () => {
    const [toDo, setToDo] = useState('')
    const dispatch = useDispatch()

    //When form submit following things should happen
    //Default refreshing page
    //New todo should be added
    //Clear the input field
    const onFormSubmit = (event) => {
        event.preventDefault()
        const addNewTodo = {
            id: uniqid(), 
            name: toDo,
            isChecked: false
        }
        dispatch(tasks.actions.addTodo(addNewTodo))

        setToDo('')
    }
    
    return (
        <form onSubmit={onFormSubmit}>
            <label>
                New Todo: &nbsp;
            <input 
            type='text'
            value={toDo}
            onChange={(event) =>setToDo(event.target.value)}
            />
            </label>
            <button type='submit'>Add New Todo!</button>
        </form>
    )
}

export default AddTodo



