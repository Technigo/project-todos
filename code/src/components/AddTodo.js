import React, { useState } from "react"
import { useDispatch } from "react-redux"
import todos from "../reducers/todos"

const AddTodo = () => {
    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const onAddTodo = () => {
        dispatch(todos.actions.addTodo(input))
    }

    return (
        <section>
            <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)} />
            <button onClick={onAddTodo}>Add todo</button>
        </section>
    )
}

export default AddTodo