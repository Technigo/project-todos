import React from 'react';
import { useSelector } from 'react-redux';

import { TaskItem } from './TaskItem';

export const TaskList = () => {
    const tasks = useSelector((store) => store.tasks);

    return (
        <main>
            {tasks.map((tasks) => (
                <TaskItem key={tasks.id} tasks={tasks} />
            ))}
        </main>
    );
};