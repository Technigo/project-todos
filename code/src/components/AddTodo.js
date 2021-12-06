import React, { useState } from "react";
import { useDispatch } from "react-redux";

import todos from '../reducers/todos'

const AddTodo = () => {
    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const onAddTodo = () => {
        dispatch(todos.actions.addTodo(input))
    }

    return (
        <>
        <section className="add-todo">
            <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Add what you need to do ..."
                className="input-text"
            />
            <span></span>
            <button
                onClick={onAddTodo}
                className="btn-add btn"
                disabled={input.length < 1 || input.length > 140}
            >
                <strong>+</strong>
            </button>
        </section>
        <p className="char-count">{input.length} / 140 characters</p>
        </>
    )
}

export default AddTodo