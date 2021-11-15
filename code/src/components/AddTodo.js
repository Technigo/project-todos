import React, { useState } from "react";
import { useDispatch } from "react-redux";

//import the slice itself for dispatch
import todos from "reducers/todos";

const AddTodo = () => {
    const [input, setInput] = useState('')

    const dispatch = useDispatch()
    const onAddTodo = (input) => {
        dispatch(todos.actions.addTodo(input))
    }

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
            />
            <button onClick={() => onAddTodo(input)}>send</button>
        </div>
    )
}

export default AddTodo