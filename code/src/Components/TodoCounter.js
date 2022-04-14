import React from "react";
import { useSelector } from "react-redux";


const TodoCounter = () => {

    const todo = useSelector((store) => store.todo.items);
    const remainingTodos = todo.filter((todo) => todo.done === false)

    if (todo.length > 0) {
        return (
            <section className="counter-total">
                <h2>You have {remainingTodos.length} todo's! </h2>
            </section>
        );
  } else if (remainingTodos.length === 0) {

     return (
        <section className="counter-left">
            <p>
            No more todo's, or add new ones! 
            </p>
               
             </section>
       )
    }
};

export default TodoCounter;

