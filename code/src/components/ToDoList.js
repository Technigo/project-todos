import React from "react";
import { useSelector, useDispatch } from "react-redux";

import todos from "reducers/todos";

const ToDoList = () => {
    const allTodos = useSelector((state) => state.todos.items);

    const dispatch = useDispatch();

    const onCompletedToggle = (id) => {
        dispatch(todos.actions.toggleCompleted(id));
    };

    const onDelete = (id) => {
        dispatch(todos.actions.deleteToDo(id));
    };

    return (
        <div>
            {allTodos.map((item) => (
                <div key={item.id}>
                    <p>{item.text}</p>
                    <input
                        type="checkbox"
                        checked={item.isComplete}
                        onChange={() => {
                            onCompletedToggle(item.id);
                        }}
                    >
                    </input>
                    <button
                        onClick={() => {
                            onDelete(item.id);
                        }}
                    >
                        Delete To-Do
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ToDoList;
