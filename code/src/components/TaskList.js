import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import tasks from 'reducers/tasks'

const TaskItem = styled.article`
display: flex;
align-items: center;
border-radius: 10px;
padding: 3px;
margin: 1rem 1.5rem;
height: 4rem;
position: relative;
word-break: break-word;
overflow-wrap: wrap;
background-color: white;

@media (min-width: 678px) {
    margin: 1rem 3rem;
  }

  @media (min-width: 1024px) {
    margin: 1rem 5rem;
  }
`
const TaskText = styled.h2`
max-width: 70%;
font-size: 20px;
/* margin: 0 8px; */
color: ${(props) => (props.completed ? `#b0b0b0` : `#222221`)};
`

const ButtonDelete = styled.button`
position: absolute;
right: 10px;
margin-left: 6px;
/* padding: 0 2px 0 8px; */
border: none;
background: none;
font-size: 2rem;
cursor: pointer;
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
                <TaskText completed={taskItem.complete}>&nbsp;{taskItem.text}</TaskText>
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
