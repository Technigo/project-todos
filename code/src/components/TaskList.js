import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import tasks from 'reducers/tasks'

const TaskItem = styled.article`
display: flex;
align-items: center;
border: 1px solid black;
padding: 10px;
margin-bottom: 5px;
position: relative;
`

const ButtonDelete = styled.button`
position: absolute;
top: 10px;
right: 10px;
border: none;
background: none;
`

const TaskList = () => {
    const taskList = useSelector((store) => store.tasks.items)

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
                <input 
                type='checkbox'
                checked={taskItem.complete}
                onChange={() => onTaskToggle(taskItem.id)}
                />
                <h2>&nbsp;{taskItem.text}</h2>
                <ButtonDelete onClick={() => onTaskDelete(taskIndex)}>
                    <span role='img' aria-label='delete'>
                        ✖️
                    </span>
                </ButtonDelete>
            </TaskItem>
            ))}
        </section>
    )
}

export default TaskList
