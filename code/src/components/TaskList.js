import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import tasks from 'reducers/tasks'

const TaskItem = styled.article`
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 5px;
    position: relative;
`

const DeleteButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
`

const TaskList = () => {
const taskList = useSelector((backpack) => backpack.tasks.items)

// console.log(taskList)

const dispatch = useDispatch()

const onTaskToggle = (taskId) => {
    dispatch(tasks.actions.toggleItem(taskId))
}

const onTaskDelete = (index) => {
    dispatch(tasks.actions.deleteItem(index))
}

return (
<section>
    {taskList.map((taskItem, taskIndex) => (
        <TaskItem key={taskItem.id}>
            <h2>{taskItem.name}</h2>
            <label>
                Is done:
            <input type="checkbox" checked={taskItem.isDone}
            onChange={() => onTaskToggle(taskItem.id)}/>
            </label>
            <DeleteButton onClick={() => onTaskDelete(taskIndex)}>
                <span role="img" aria-label="delete">🧨</span>
            </DeleteButton>
        </TaskItem>
    ))}
</section>
)
}

export default TaskList;