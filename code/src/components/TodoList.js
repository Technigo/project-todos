import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import todos from '../reducers/todos';

const TodoList = () => {
    // Reach from items array from redux store
    const items = useSelector((store) => store.todos.items);

    // Create an instance of useDispatch hook
    const dispatch = useDispatch();

    return (
        <div className="todo-list">
            {items.map(todo => (
                <div key={todo.id}>
                    <p>{todo.description}</p>
                    <input
                        type="checkbox"
                        checked={todo.isComplete}
                        // Dispatch (send) an action toggleComplete with one argument - id of a task
                        onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
                    />
                </div>
            ))}
        </div>
    )
};

export default TodoList;