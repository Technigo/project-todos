import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import tasks from '../reducers/tasks';
import wastebin from '../images/wastebin.png';

const TodoList = () => {

    const items = useSelector((store) => store.tasks.items);
    const dispatch = useDispatch();

    return (
        <div className="todo-wrapper">
            {items.map(task => (
                <div key={task.id} className="todo">
                    <input
                        id={task.id}
                        className="checkbox"
                        type="checkbox"
                        checked={task.isComplete}
                        onChange={() => dispatch(tasks.actions.toggleFinished(task.id))}
                   />
                    <div className="todo-text-container">
                        <label htmlFor={task.id}>{task.description}</label>
                    </div>
                        <img src={wastebin}
                         alt="Remove"
                         className="waste-bin"
                         onClick={() => dispatch(tasks.actions.removeTask(task.id))}>
                         </img>
                </div>
            ))}   
        </div>
    )
}

export default TodoList;
