import React from "react";
import { useSelector } from "react-redux";

const TodoCounter = () => {
    const todos = useSelector((state) => state.todos.items)
    const remainingTodos = todos.filter((todo) => todo.isComplete === true)


    if (todos.length > 0) {
        return (
            <section className="todo-counter tc-items">
                <p>You have {todos.length} added tasks.</p>
                <p>Currently {remainingTodos.length} of them are done.</p>
            </section>
        )
    } else if (remainingTodos.length === 0) {
        return (
            <section className="todo-counter tc-empty">
                <p>You don't have any added tasks.</p>
                <p>First thing to do is to add one!</p>
            </section>
        )
    } 
}

export default TodoCounter