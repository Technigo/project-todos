import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components/macro';

import tasks from "reducers/tasks";

const TaskItem = styled.article`
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 5px;
    position: relative;
    `;

    const DeleteButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    cursor: pointer;
    `;

const TaskList = () => {
    const taskList = useSelector((backpack) => backpack.tasks.items);

    const dispatch = useDispatch();

    const onTaskToggle = (taskId) => {
        dispatch(tasks.actions.toggleItem(taskId));
    };

    return (
        <section>
        {taskList.map((taskItem) => (
            <TaskItem key={taskItem.id}>
            <h2>{taskItem.task}</h2>
            <label>
                Is done:
                <input
                type="checkbox"
                checked={taskItem.isDone}
                onChange={() => onTaskToggle(taskItem.id)}
                />
            </label>
            <DeleteButton>
                <span role="img" aria-label="delete">
                ❌
                </span>
            </DeleteButton>
            </TaskItem>
        ))}
        </section>
    );
};

export default TaskList;
