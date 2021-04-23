import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import todos from '../reducers/todos';

const TodoList = () => {
    // Reach from items array from redux store
    const items = useSelector((store) => store.todos.items);
    const completedItems = items.filter(singleTodo => singleTodo.isComplete);

    const checkboxRef = useRef(null);

    // Create an instance of useDispatch hook
    const dispatch = useDispatch();

    const onCheckboxToggle = (id) => {
        checkboxRef.current.classList.add('todo-checkbox');

        this.classNameTimeout = setTimeout(() => {
            checkboxRef.current.classList.remove('todo-checkbox');
        }, 500);

        dispatch(todos.actions.toggleComplete(id));
    }

    useEffect(() => {
        return () => {
            this.classNameTimeout.clearTimeout()
        }
    })

    return (
        <div>
            <p>Completed : {completedItems.length}/{items.length}</p>
            <button onClick={() => dispatch(todos.actions.completeAllTodos())}>Complete all</button>
            {items.map((todo, index) => (
                <div key={todo.id} className="todo-item">
                    <p>{todo.description}</p>
                    <input
                        ref={checkboxRef}
                        type="checkbox"
                        checked={todo.isComplete}
                        // Dispatch (send) an action toggleComplete with one argument - id of a task
                        onChange={() => onCheckboxToggle(todo.id)}
                    />
                    <p>Date: {new Date(todo.dueDate).toLocaleDateString()}</p>
                    <button onClick={() => dispatch(todos.actions.removeTodo(todo.id))}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
};

export default TodoList;