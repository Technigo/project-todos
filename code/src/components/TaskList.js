import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import tasks from 'reducers/tasks'

const TaskItem = styled.article`
display: flex;
align-items: center;
/* border: 1px solid black; */
/* padding: 10px; */
/* margin: 0 1rem; */
height: 5rem;
position: relative;
word-break: break-word;
/* flex-wrap: wrap; */
`
const TaskText = styled.h2`
max-width: 75%;
`

const ButtonDelete = styled.button`
position: absolute;
top: 22px;
right: 10px;
padding-left: 2px;
border: none;
background: none;
font-size: 2rem;
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
                <TaskText>&nbsp;{taskItem.text}</TaskText>
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
