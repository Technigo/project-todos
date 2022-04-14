import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import tasks from 'reducers/tasks'

const TaskItem = styled.article`
    border: 1px solid rgb(253, 93, 93);
    border-radius: 5px;
    padding: 1rem;
    position: relative;
    font-size: 0.8rem;
`

const DeleteButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 0.6rem;
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
            <h4>{taskItem.name}</h4>
            <label>
                task completed
            <input type="checkbox" checked={taskItem.isDone}
            onChange={() => onTaskToggle(taskItem.id)}/>
            </label>
            <DeleteButton onClick={() => onTaskDelete(taskIndex)}>
                <span role="img" aria-label="delete">✖️</span>
            </DeleteButton>
        </TaskItem>
    ))}
</section>
)
}

export default TaskList;