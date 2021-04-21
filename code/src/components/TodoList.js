import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import todos from '../reducers/todos'

const TodoList = () => {
    const items = useSelector((store) => store.todos.items);

    const dispatch = useDispatch();

    //console.log(items.length)

    return (
        <div>
            {items.map((todo, index) => (
                <div key={todo.id} className="todo-items">
                    <p>{todo.description}</p>
                    <input 
                        type="checkbox"
                        checked={todo.isComplete}
                        onChange={() => dispatch(todos.actions.toggleComplete(todo.id))} // Vi gör på detta sätt för att det finns en state eller actions i vår toggleComplete, vi tillkallar action delen
                    />
                    <button onClick={() => dispatch(todos.actions.removeTodo(index))}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
}

export default TodoList