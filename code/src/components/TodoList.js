import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import todos from '../reducers/todos';

const TodoList = () => {
    const items = useSelector((store) => store.todos.items);
    const dispatch = useDispatch();

    return (
        <div>
            {items.map(todo => (
                <div key={todo.id} className="todo-item">
                    <button className="delete-btn" onClick={() => dispatch(todos.actions.removeTodo(todo.id))} >
                    X
                    </button>
                    <p>{todo.description}</p>
                    <input
                        type="checkbox"
                        checked={todo.isComplete}
                        onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
                    />
                </div>
            ))}
        </div>
    )
};

export default TodoList;