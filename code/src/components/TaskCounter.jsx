import React from 'react';
import { useSelector } from 'react-redux';


const TaskCounter = () => {

    const allTasks = useSelector(store => store.tasks.items)

    const completedTasks = allTasks.filter(singleTask => singleTask.complete)

    return (
        <article>
            <p className='task-counter'>Completed todo's: {completedTasks.length} / {allTasks.length}</p>
        </article>
    )
}

export default TaskCounter;
