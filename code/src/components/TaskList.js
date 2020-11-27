import React from 'react';
import { useSelector } from 'react-redux';

import { TaskItem } from './TaskItem';

export const TaskList = () => {
    /* Accessing the global state and the initial state of the items array*/
    const tasks = useSelector((state) => state.tasks.list.items);

    return (
        <>
            {tasks.map(todoItem => (
                /* Passing the index from the items array allows us to retrive and re-render the task inputted based on the index number. */
                <TaskItem key={todoItem.id} item={todoItem} />
            ))}
        </>
    );
};
