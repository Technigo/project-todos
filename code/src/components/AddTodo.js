import React from "react";
import { useDispatch } from "react-redux";

import todos from '../reducers/todos'

const AddTodo = () => {

    const dispatch = useDispatch()

    return(
        <div>
            <input type="text" />
            <button onClick={() => dispatch(todos.actions.addTodo)}>
                Add todo
            </button>
        </div>
    )
}

export default AddTodo