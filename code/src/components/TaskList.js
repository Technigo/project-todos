import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components'

import tasks from "reducers/tasks";

const taskArticle = styled.article`
    position: relative;
`

const RemoveButton = styled.button`
    background-color: blue;
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    cursor: poiner;
`


const TaskList = () => {
    const allTasks = useSelector((store) => store.tasks.items)

    const dispatch = useDispatch()

    const onItemToggle = (taskId) => {
        dispatch(tasks.actions.toggleItem(taskId))

    }

    return (
        <section>
            {allTasks.map(taskItem => (
                <article key={taskItem.id}>
                    <h2>{taskItem.name}</h2>
                    <label> Completed:
                        <input type="checkbox" 
                        checked={taskItem.complete} 
                        onChange={() => onItemToggle(taskItem.id)}
                        />
                    </label>
                    <RemoveButton>X</RemoveButton>
                </article>
            ))}
        </section>
    )
}

export default TaskList