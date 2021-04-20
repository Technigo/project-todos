import React from "react";
import { useDispatch } from "react-redux";


import { todos } from "../reducers/todos";

export const DeleteButton = ({ todo }) => {
    const dispatch = useDispatch();

    const onDelete = id => {
        dispatch(todos.actions.removeItem(id));
    };

    return (
        <button type="button" onClick={() => onDelete(todo.id)}>
            X
        </button>
    );
};