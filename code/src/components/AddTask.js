import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import tasks from '../reducers/tasks';

const AddTask = () => {

    const [value, setValue] = useState ('');
    const dispatch = useDispatch();
    const numberOfTasks = useSelector((store) => store.tasks.items.length);

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTask = {
            id: numberOfTasks,
            description: value
        }

        dispatch(tasks.actions.addTask(newTask))
        setValue('')
    }

    return (
        <form onSubmit={onFormSubmit}>
            <button className="submit-button" type="submit"> + </button>
            <input 
            type="text"
            placeholder="Add task" 
            value={value}
            onChange = {event => setValue(event.target.value)}
            />
        </form>
    )
}

export default AddTask
