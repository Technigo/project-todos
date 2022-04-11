import React from "react";
import { useSelector } from "react-redux";
import { Todo } from 'compnents/Todo'

export const TodoList = () => {
    const allTodos = useSelector((store) => store.todos)

    return (
        <div>
            {allTodos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    )
}