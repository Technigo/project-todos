import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { todos } from "../reducers/todos.js"

export const TodoItem = ({ itemIndex }) => {
    const item = useSelector((store) => store.todos.list.items[itemIndex]);

    const dispatch = useDispatch();

    const onRemoveClicked = (e) => {

        dispatch (
            todos.actions.removeTodo({
                itemIndex,
            })
        );
    };

    const handleOnChange = (e) => {

        dispatch (
            todos.actions.setDone({
                itemIndex: itemIndex,
                done: !item.done,
            })
        );
    };

    return (

        <div className={`todo-item ${item.done ? "done" : ""}`}>
            <input
            type="checkbox"
            onChange={handleOnChange}
            className="todo-checked"
            checked={item.done ? "checked" : ""}
            ></input>
            <span className="todo-description">{item.description}</span>
            <a href="/#"  className="todo-remove" onClick={onRemoveClicked}>
                [remove]
            </a>
        </div>


    )

}