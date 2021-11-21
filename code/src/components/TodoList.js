import React from "react";
import { useSelector, useDispatch } from "react-redux";

import todos from "../reducers/todos";

const TodoList = () => {
    const items = useSelector((store) => store.todos.items)

    const dispatch = useDispatch()

    const onToggleTodo = (id) => {
        dispatch(todos.actions.toggleTodo(id))
    }

    // - Mutability
    // const onDeleteTodoMutability = (index) => {
    //    dispatch(todos.actions.deleteTodo(index))
    // }

    // - Immutability
    const onDeleteTodoImmutability = (id) => {
        dispatch(todos.actions.deleteTodo(id))
    }

    return (
        <section>
            {items.map((item, index) => (
                <div className="flex-item" key={item.id}>
                    <input
                        type="checkbox"
                        checked={item.isComplete}
                        onChange={() => onToggleTodo(item.id)}
                    />
                    <p>{item.text}</p>
                    {/* - Mutability */}
                    {/* <button onClick={() => onDeleteTodoMutability(index)}>
                        Delete
                    </button> */}
                    
                    {/* - Immutability */}
                    <button onClick={() => onDeleteTodoImmutability(item.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </section>
    )
}

export default TodoList