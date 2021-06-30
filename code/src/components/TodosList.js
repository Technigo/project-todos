import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Checkbox } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

import todos from '../reducers/todos';


const TodosList = () => {
    const tasks = useSelector((store) => store.todos.tasks); 
    const completedTasks = tasks.filter(singleTask => singleTask.isComplete);

    console.log(completedTasks);

    const dispatch = useDispatch();



    return (
        <div className="tasks-container">
           <p>Completed Tasks: {completedTasks.length}/{tasks.length}</p>
            {tasks.map(singleTask => (
                <div key={singleTask.id} className="checkbox-container">
                    <Checkbox
                        color="Secondary"
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        type="checkbox"
                        checked={singleTask.isComplete}
                        onChange={() => dispatch(todos.actions.toggleComplete(singleTask.id))}
                    />
                    {/* <input
                        type="checkbox"
                        checked={singleTask.isComplete}
                        onChange={() => dispatch(todos.actions.toggleComplete(singleTask.id))}
                    /> */}
                    <p>{singleTask.description}</p>
                    <button onClick={() => dispatch(todos.actions.removeTodo(singleTask.id))}>
                    Delete
                    </button>
                </div>
            ))}
        </div>
    )
};

export default TodosList;