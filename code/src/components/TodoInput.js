import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { todos } from "../reducers/todos"

export const TodoInput = () => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");

    const handleOnSumbit = e => {
        e.preventDefault();
    }

    dispatch (
        todos.actions.addTodo({
            listId: listId,
            itemInfo: { description: inputValue, done: false}
        })
    );

    setInputValue("");

    return (
        <from className="todo-input" onSubmit={handleOnSumbit}>
            <input
            type="text"
            onChange={e => setInputValue(a.target.value)}
            value={inputValue}
            className="todo-input-text"
            ></input>
            <input
            type="submit"
            className="todo-submit-button"
            value="Add tdo"
            ></input>
        </from>

    );

};

