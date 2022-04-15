import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatRelative } from "date-fns";
import subDays from "date-fns/subDays";

import tasks from "reducers/tasks";

import { TaskItem, SmallButton, Tasklist, Taskwrapper } from "../styled-components";

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
                <Taskwrapper>
                    <TaskItem key={taskItem.id}>
                        <h2>{taskItem.task}</h2>
                        <label className="container" title={'Done'}>
                            <input
                            type="checkbox"
                            checked={taskItem.isDone}
                            onChange={() => onTaskToggle(taskItem.id)}
                            />
                            Done:
                            <span className="checkmark"></span>
                            
                            
                        </label>
                        <SmallButton onClick={() => {
                            onTaskDelete(index)
                            }
                        }>
                            <span role="img" aria-label="delete">
                            {/* ❌ */}delete
                            </span>
                        </SmallButton>
                        <p>created: {new Date(taskItem.createdAt).toLocaleTimeString()}</p>
                    </TaskItem>
                </Taskwrapper>
            ))}
        </Tasklist>
    );
};

export default TaskList;
