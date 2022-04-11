import React from "react";
import { useSelector } from "react-redux";
import { AddTodo } from "./AddTodo";


export const Header = () => {
    const allTodos = useSelector((store) => store.list.todos)

    const totalTodos = useSelector((store) => (
        store.list.todos.reduce((total, todo) => (total + (todo.quantity)), 0)
    ))

    return (
        <div>You have {totalTodos} todo's
            <ul>
                {allTodos.map((todo) => (
                    <AddTodo key={todo.id} todo={todo} />
                ))}
            </ul>

        </div>
    )
}