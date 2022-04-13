import React from "react";
import { useSelector } from "react-redux";


const TodoCounter = () => {

    const todo = useSelector((store) => store.todos.items);
    const remainingTodos = todo.filter((todo) => todo.isComplete === false);

    if (todo.length > 0) {

        return (
            <section className="counter-total">
                <p>You have {remainingTodos.length} to-dos! </p>

            </section>
        );
    } else if (remainingTodos.length === 0) {

        return (
            <section className="counter-left">
                <p> No more to-dos</p>

            </section>

        )
    }

};



export default TodoCounter;