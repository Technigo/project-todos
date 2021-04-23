import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import tasks from '../reducers/tasks';

const Header = () => {

    const dispatch = useDispatch();
    const numberOfTasks = useSelector((store) => store.tasks.items.length);

    const onRemoveTasks = () => {
        dispatch(tasks.actions.removeTasks());
    }

    return (
        <div className="header">
            <h1>To do</h1>
            
            <div className="h1-date-container">
                
                <p>{new Date().toLocaleDateString()}</p>
            
            <div className="tasks-clear-container">
                <p>{numberOfTasks} {numberOfTasks < 2 ? "task" : "tasks"}</p>
                <button className="clear-button" type="button" onClick={onRemoveTasks}>Clear All</button>
            </div>
            </div>
        </div>
    )
}

export default Header;