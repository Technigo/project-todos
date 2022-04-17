import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { formatRelative } from "date-fns";

import { TaskItem, SmallButton, Tasklist, Taskwrapper, Created } from "../styled-components";

import tasks from "reducers/tasks";

const TaskList = () => {
    const taskList = useSelector((backpack) => backpack.tasks.items);
    const completedTasks = taskList.filter(taskItem => taskItem.isDone);
    const incompletedTasks = taskList.filter(taskItem => !taskItem.isDone);
    const dispatch = useDispatch();

    const onTaskToggle = (taskId) => {
        dispatch(tasks.actions.toggleItem(taskId));
    };

    const onTaskDelete = (taskIndex) => {
        dispatch(tasks.actions.deleteItem(taskIndex));
    };

    return (
        <Tasklist>
            {incompletedTasks.map((taskItem, index) => (
                <Taskwrapper key={taskItem.id}>
                    <TaskItem>
                        <h2>{taskItem.task}</h2>
                        <label className="container" title={'Done'}>
                            <input
                            type="checkbox"
                            checked={taskItem.isDone}
                            onChange={() => onTaskToggle(taskItem.id)}
                            />
                            {taskItem.isDone ? 'Completed' : 'Complete task!'}
                            <span className="checkmark"></span>
                        </label>
                        <SmallButton onClick={() => {
                            onTaskDelete(index)
                            }
                        }>
                            <span role="img" aria-label="delete">
                                delete
                            </span>
                        </SmallButton>
                        <Created>created: {formatRelative(new Date(taskItem.createdAt), new Date())}</Created>
                    </TaskItem>
                </Taskwrapper>
            ))}
            {completedTasks.map((taskItem, index) => (
                <Taskwrapper key={taskItem.id}>
                    <TaskItem >
                        <h2>{taskItem.task}</h2>
                        <label className="container" title={'Done'}>
                            <input
                            type="checkbox"
                            checked={taskItem.isDone}
                            onChange={() => onTaskToggle(taskItem.id)}
                            />
                            {taskItem.isDone ? 'Completed' : 'Complete task!'}
                            <span className="checkmark"></span>
                        </label>
                        <SmallButton onClick={() => {
                            onTaskDelete(index)
                            }
                        }>
                            <span role="img" aria-label="delete">
                                delete
                            </span>
                        </SmallButton>
                        <Created>created: {formatRelative(new Date(taskItem.createdAt), new Date())}</Created>
                    </TaskItem>
                </Taskwrapper>
            ))}
        </Tasklist>
    );
};

export default TaskList;
