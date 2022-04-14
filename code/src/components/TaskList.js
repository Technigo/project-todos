import React from "react";
import { useSelector, useDispatch } from "react-redux";

import tasks from "reducers/tasks";

import { TaskItem, DeleteButton, Tasklist } from "../styled-components";

const TaskList = () => {
    const taskList = useSelector((backpack) => backpack.tasks.items);

    const dispatch = useDispatch();

    const onTaskToggle = (taskId) => {
        dispatch(tasks.actions.toggleItem(taskId));
    };

    const onTaskDelete = (taskIndex) => {
        dispatch(tasks.actions.deleteItem(taskIndex));
    };


    return (
        <Tasklist>
            {taskList.map((taskItem, index) => (
                
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
                    <DeleteButton onClick={() => {
                        onTaskDelete(index)
                        }
                    }>
                        <span role="img" aria-label="delete">
                        {/* ❌ */}delete
                        </span>
                    </DeleteButton>
                </TaskItem>
            ))}
        </Tasklist>
    );
};

export default TaskList;
