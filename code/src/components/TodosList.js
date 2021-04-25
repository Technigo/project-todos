import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


import todos from '../reducers/todos';


const TodosList = () => {
    const tasks = useSelector((store) => store.todos.tasks); 

    const dispatch = useDispatch();



    return (
        <div>
            {tasks.map(singletask => (
                <div key={singletask.id}>
                    <p>{singletask.description}</p>
                    <input
                        type="checkbox"
                        checked={singletask.isComplete}
                        onChange={() => dispatch(todos.actions.toggleComplete(singletask.id))}
                    />
                    <button onClick={() => dispatch(todos.actions.removeTodo(singletask.id))}>
                    Delete
                    </button>
                </div>
            ))}
        </div>
    )
};

export default TodosList;