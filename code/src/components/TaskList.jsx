import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';


const TaskList = () => {
    const taskList = useSelector((store) => store.tasks.items);

    const dispatch = useDispatch();

    const onItemToggle = (taskId) => {
        dispatch(tasks.actions.toggleItem(taskId))
    };

    const onTaskRemove = (index) => {
        dispatch(tasks.actions.removeItem(index));
    };

    return (
        <section className='task-background'>
            {taskList.map((taskItem, taskIndex) => (
               <article className ='task-container' key={taskItem.id}>
                   <h2 className='task'>{taskItem.text}</h2>
                   <div className='cta-container'>
                        <label>
                                <input
                                    className='checkbox'
                                    type='checkbox'
                                    checked={taskItem.complete} 
                                    onChange={() => onItemToggle(taskItem.id)}
                                />
                        </label>
                        <button onClick={() => onTaskRemove(taskIndex)}>
                            <span role='img' aria-label='delete'>X</span>
                        </button>
                   </div>
               </article>
            ))}
        </section>
    );
};

export default TaskList;
