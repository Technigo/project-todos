import React from "react";
import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
    const todos = useSelector(store => store.todos);

    return (
        <ul className="TodoList">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};