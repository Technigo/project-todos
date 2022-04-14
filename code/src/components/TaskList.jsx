import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';


const TaskList = () => {
    const taskList = useSelector((backpack) => backpack.tasks.items);

    const dispatch = useDispatch();

    const onItemToggle = (taskId) => {
        dispatch(tasks.actions.toggleItem(taskId))
    };

    const onTaskRemove = (index) => {
        dispatch(tasks.actions.removeItem(index));
    };

    return (
        <section>
            {taskList.map((taskItem, taskIndex) => (
               <article key={taskItem.id}>
                   <h2>{taskItem.text}</h2>
                   <label>
                        Is completed:
                        <input
                            type='checkbox'
                            checked={taskItem.complete} 
                            onChange={() => onItemToggle(taskItem.id)}
                        />
                   </label>
                   <button onClick={() => onTaskRemove(taskIndex)}>
                       <span role='img' aria-label='delete'>❌</span>
                   </button>
               </article>
            ))}
        </section>
    );
};

export default TaskList;