import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
    const items = useSelector((store) => store.todos.items)

    return (
        <section>
            {items.map((item) => (
                <div key={item.id}>
                    {item.text}
                </div>
            ))}
        </section>
    )
}

export default TodoList