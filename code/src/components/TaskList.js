import React from "react";
import { useSelector, useDispatch } from "react-redux";

import tasks from "reducers/tasks";

const TaskList = () => {
    const taskList = useSelector((backpack) => backpack.tasks.items)

    const dispatch = useDispatch()

    const onTaskToggle = (taskId) => {
        dispatch(tasks.actions.toggleItem(taskId))
    }

return (
    <div>
        {taskList.map(taskItem => (
        <article key={taskItem.id}>
             <h2>{taskItem.text}</h2>
            <label>
                Done (is caught):
             <input type="checkbox" checked={taskItem.isCaught} onChange={() => onTaskToggle(taskItem.id)} />
            </label>
            <button>
                <span role="img" aria-label="delete">x</span>
            </button>
        </article> 
     ))}
    </div>
)
}

export default TaskList