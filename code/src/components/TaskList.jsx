import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import Task from './Task';
import tasks from 'reducers/tasks';



const TaskList = () => {
    const taskList = useSelector((backpack) => backpack.tasks.items)

    const dispatch = useDispatch();

    const onTaskToggle = (taskId) => {
        dispatch(tasks.actions.toggleItem(taskId))
    }

    return (
        <section>
            {taskList.map((taskItem) => (
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
                   <button>
                       <span role='img' aria-label='delete'>❌</span>
                   </button>
               </article>
            ))}
        </section>
    )
}

export default TaskList;