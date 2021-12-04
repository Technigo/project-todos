import React from "react";
import { useSelector } from "react-redux";
import todos from "reducers/todos";

const TodoCounter = () => {
    const todos = useSelector((state) => state.todos.list.todos)
    const remainingTodos = todos.filter((todo) => todo.complete === false)

    if (remainingTodos.length === 0) {
        return (
            <section className="todo-counter tc-empty">
                <p>You're either a do-er, or need to add some ToDos!</p>
            </section>
        )
    }

    return (
        <section className="todo-counter tc-items">
            <p>
                {remainingTodos.length} of {todos.length} left to do!
            </p>
        </section>
    )

}

export default TodoCounter