import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import tasks from 'reducers/Tasks'

const AddTodo = () => {
    const [toDo, setToDo] = useState('')
    const dispatch = useDispatch()

    const addNewTodo = () => {
        dispatch()

    }
    return (
        <form>
            <input 
            type='text'
            value={toDo}
            onChange={event=>setToDo(event.target.value)}
            />
            <button onClick={addNewTodo}>Add New Todo!</button>
        </form>
    )
}

export default AddTodo