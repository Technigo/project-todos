import React, { useState } from "react";
import { useDispatch } from "react-redux";
import todos from "../reducers/todos";

export const AddToDo = () => {
    const [task, setTask] = useState(" ");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        dispatch(todos.actions.addTask(task))
        setTask("")
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={e => setTask(e.target.value)} />
                <button type="submit">add task</button>
        </form>
    )
}