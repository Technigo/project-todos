import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import tasks from 'reducers/tasks'

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
            <CheckboxItems>
            <input type="checkbox" checked={taskItem.isDone}
            onChange={() => onTaskToggle(taskItem.id)}/>
            </CheckboxItems>
            <DeleteButton onClick={() => onTaskDelete(taskIndex)}>
                <span role="img" aria-label="delete">✖️</span>
            </DeleteButton>
        </TaskItem>
    ))}
</section>
)
}

export default TaskList;

const TaskItem = styled.article`
    margin-top: 1.5rem;
    border: 1px solid #f5fbfd;
    padding: 0 3rem 1rem 1rem;
    position: relative;
    font-size: 1rem;
    word-break: break-word;
    overflow-wrap: wrap;
    `

const DeleteButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
`
const CheckboxItems = styled.label`
position: absolute;
bottom: 10px;
right: 17px;
font-size: 2rem;
`