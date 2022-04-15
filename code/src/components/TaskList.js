import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TaskStyling, TaskItem, DeleteButton, NumberOfTasks } from 'styles'

import tasks from 'reducers/tasks'


const TaskList = () => {
    const taskList = useSelector((backpack) => backpack.tasks.items)

    const dispatch = useDispatch()

    const onTaskToggle = (taskId) =>  {
        dispatch(tasks.actions.toggleTask(taskId))
    }

    const onTaskDelete = (index) => {
        dispatch(tasks.actions.deleteTask(index))
    }

    return (
        <section>
            <NumberOfTasks>Number of tasks: {taskList.length}</NumberOfTasks>
            <TaskStyling>
                {taskList.map((taskItem, taskIndex) => {
                    return <TaskItem key={taskItem.id}>
                        <h2>{taskItem.text}</h2>
                        <label>
                            Is done:
                            <input
                                type="checkbox"
                                checked={taskItem.complete}
                                onChange={() => onTaskToggle(taskItem.id)}
                                className="tasks" />
                        </label>
                        <DeleteButton onClick={() => onTaskDelete(taskIndex)}>
                            <span role="img" aria-label="delete" className="delete">
                                x
                            </span>
                        </DeleteButton>
                    </TaskItem>
                })}
            </TaskStyling>
        </section>
    )
}

export default TaskList