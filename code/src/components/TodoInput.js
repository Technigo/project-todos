import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { todos } from "../reducers/todos"

export const TodoInput = ({ listId }) => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");

    const handleOnSumbit = e => {
        e.preventDefault();
 

    dispatch (
        todos.actions.addTodo({
            listId: listId,
            itemInfo: { description: inputValue, done: false }
        })
    );

    setInputValue("");
    };


    return (
        <form className="todo-input" onSubmit={handleOnSumbit}>
            <input
            type="text"
            onChange={e => setInputValue(e.target.value)}
            value={inputValue}
            className="todo-input-text"
            />
            <input
            type="submit"
            className="todo-submit-button"
            value="Add Todo"
            />
        </form>

    );

};

