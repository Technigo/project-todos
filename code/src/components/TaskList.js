import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import tasks from 'reducers/tasks'

const TaskList = () => {
    const taskList = useSelector((store) => store.tasks.items)

    const dispatch = useDispatch()

    const onTaskToggle = (taskId) => {
        dispatch(tasks.actions.toggleItem(taskId))
    }

    return (
        <section>
            {taskList.map((taskItem) => (
            <div key={taskItem.id}>
                <p>{taskItem.text}</p>
                <input 
                type='checkbox'
                checked={taskItem.complete}
                onChange={() => onTaskToggle(taskItem.id)}
                />
            </div>
            ))}
        </section>
    )
}

export default TaskList
