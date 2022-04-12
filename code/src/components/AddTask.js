import React, { useState } from "react";
import { useDispatch } from "react-redux";

import tasks from '../reducers/tasks';

const AddTask = () => { 
    const [task, setTask] = useState('')
    const dispatch = useDispatch();

    const onAddTask = () => {
        dispatch(tasks.actions.addTask(task)); 
        setTask('');
    }
       
    return (
        <div>
            <input 
                type='text'
                value={task}
                placeholder='enter task'
                onChange={(event) => setTask(event.target.value)}
            />
            <button onClick={()=> onAddTask()}>add</button>
            
        </div>
    );
};

export default AddTask; 