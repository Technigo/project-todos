import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import tasks from '../reducers/tasks';

const TodoList = () => {

    const items = useSelector((store) => store.tasks.items);

    const dispatch = useDispatch();

    return (
        <div className="todo-container">
            {items.map(task => (
                <>
                <input
                id={task.id}
                className="checkbox"
                type="checkbox"
                checked={task.isComplete}
                onChange={() => dispatch(tasks.actions.toggleFinished(task.id))}
            />
                <div className="todo" key={task.id}>
                    
                    <label htmlFor={task.id}>{task.description}</label>
                </div>
                </>
            ))}   
        </div>
    )
}

export default TodoList;
