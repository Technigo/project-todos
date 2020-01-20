import React from "react";
import { useDispatch } from "react-redux";
import { todos } from "reducers/todos";

export const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();
    const { id, text, isCompleted } = todo;

    const handleClick = () => {
        dispatch(todos.actions.toggleTodo({ id }));
    };

    return (
        <li
            className={`TodoItem${isCompleted ? " is-completed" : ""}`}
            onClick={handleClick}
        >
            {text}
        </li>
    );
};