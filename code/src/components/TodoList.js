import React from "react";
import { useSelector, useDispatch } from "react-redux";

import todos from "../reducers/todos";

const TodoList = () => {
    const items = useSelector((store) => store.todos.items)

    const dispatch = useDispatch()

    const deleteAllTodos = () => {
        dispatch(todos.actions.deleteAllTodos())
    }

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
        <section className="todo-items">
            <div className="todo-items-header">
                <p>Done?</p>
                <p>Task todo</p>
                <button
                    onClick={deleteAllTodos}
                    className="btn-del-all btn"
                    disabled={items < 1}>
                    <strong>Remove All</strong>
                </button>
            </div>
            {items.map((item, index) => (
                <div className="todo-item-flex" key={item.id}>
                    <label className="checkbox-container">
                        <p className="item-text">{item.text}</p>
                        <input
                            type="checkbox"
                            checked={item.isComplete}
                            onChange={() => onToggleTodo(item.id)}
                        />
                        <span className="checkmark"></span>
                    </label>
                    {/* - Mutability */}
                    {/* <button onClick={() => onDeleteTodoMutability(index)}>
                        Delete
                    </button> */}

                    {/* - Immutability */}
                    <button
                        onClick={() => onDeleteTodoImmutability(item.id)}
                        className="btn-del btn"
                    >
                        <strong>Remove</strong>
                    </button>
                </div>
            ))}
        </section>
    )
}

export default TodoList