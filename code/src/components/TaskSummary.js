import React from 'react';
import { useSelector } from 'react-redux';

import { TasksDone } from '../styled-components/Summary';

export const TaskSummary = () => {
    /* Accessing the global state and the initial state object list */
    const list = useSelector(state => state.tasks.list);

    /* Filtering the number of tasks that are set to done in the global state */
    const numberOfTasksDone = list.items.filter(item => item.done).length;

    return (
        <>
            <TasksDone>{numberOfTasksDone} / {list.items.length} completed</TasksDone>
        </>
    );
};
