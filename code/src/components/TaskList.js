import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import tasks from '../reducers/tasks'

const TaskList = () => {
    const items = useSelector((store) => store.tasks.items)
    const completedTasks = items.filter(item => item.isComplete)

    const dispatch = useDispatch()

    return (
        <div>
            <p>taks: {completedTasks.length}/{items.length}</p>
            {items.map((task, index) => (
                //separate component::
                <div key={task.id} className='task-item'>
                    <p>{task.description}</p>
                    <input
                        type='checkbox'
                        checked={task.isComplete}
                        onChange={() => dispatch(tasks.actions.toggleComplete(task.id))}
                    />
                    <button 
                        onClick={() => dispatch(tasks.actions.removeTask(task.id))}>
                        clear
                    </button>
                </div>
                //
            ))}
        </div>
    )
}

export default TaskList
