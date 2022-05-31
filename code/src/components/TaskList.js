import React from "react"
import { useSelector, useDispatch } from "react-redux"
import Moment from "react-moment"

import taskitems from "reducers/taskitems"
import TaskFilter from "./TaskFilter"

import {
    StyledTaskList,
    TaskItem,
    TaskTitle,
    TaskDetails,
    TaskTag,
    CheckBox,
    CheckSpan,
    TaskDate,
    DeleteButton } from "styles/StylesForComponents"
    

const TaskList = ({ allTasks, uncompletedTasks, completedTasks }) => {
    const taskList = useSelector((state) => state.taskitems.taskitems)
    const uncompletedTaskList = taskList.filter(task => task.complete === false)
    const completedTaskList = taskList.filter(task => task.complete === true)
    const dispatch = useDispatch()

    const onTaskToggle = (taskId) => {
        dispatch(taskitems.actions.toggleTaskItem(taskId))
    } 

    const onTaskDelete = (id) => {
        dispatch(taskitems.actions.deleteTaskItem(id))
    }

    return (
        <>
        {taskList.length > 0 && <TaskFilter />}
        {allTasks && 
            <StyledTaskList>
                {taskList.map((task) => (
                    <TaskItem key={task.id}>
                        <TaskTitle>{task.name}</TaskTitle>

                        <TaskDetails>
                            <label>
                                <input
                                type="checkbox"
                                checked={task.complete}
                                onChange={() => onTaskToggle(task.id)}
                                />
                                {task.complete && <CheckSpan>Done!</CheckSpan>}
                            </label>

                            <TaskTag
                            className={task.priority === "Urgent" ? "urgent-tag"
                            : task.priority === "Normal" ? "normal-tag"
                            : task.priority === "Low"
                            ? "low-tag" : ""}>
                                {task.priority}
                            </TaskTag>
                        </TaskDetails>
                        
                        <TaskDate>Created <Moment fromNow>{task.date}</Moment></TaskDate>

                        <DeleteButton onClick={() => onTaskDelete(task.id)}>
                                <span role="img" aria-label="emoji">
                                    ✘
                                </span>
                        </DeleteButton>
                    </TaskItem>
                ))}
            </StyledTaskList> 
        }

        {uncompletedTasks &&
            <StyledTaskList>
                {uncompletedTaskList.map((task) => (
                        <TaskItem key={task.id}>
                            <TaskTitle>{task.name}</TaskTitle>

                            <TaskDetails>
                                <label>
                                    <input
                                    type="checkbox"
                                    checked={task.complete}
                                    onChange={() => onTaskToggle(task.id)}
                                    />
                                    {task.complete && <CheckSpan>Done!</CheckSpan>}
                                </label>

                                <TaskTag
                                className={task.priority === "Urgent" ? "urgent-tag"
                                : task.priority === "Normal" ? "normal-tag"
                                : task.priority === "Low"
                                ? "low-tag" : ""}>
                                    {task.priority}
                                </TaskTag>
                            </TaskDetails>
                            
                            <TaskDate>Created <Moment fromNow>{task.date}</Moment></TaskDate>

                            <DeleteButton onClick={() => onTaskDelete(task.id)}>
                                <span role="img" aria-label="emoji">
                                    ✘
                                </span>
                            </DeleteButton>
                        </TaskItem>
                    ))}
            </StyledTaskList> 
        }

        {completedTasks &&
            <StyledTaskList>
                {completedTaskList.map((task) => (
                    <TaskItem key={task.id}>
                        <TaskTitle>{task.name}</TaskTitle>

                        <TaskDetails>
                            <label>
                                <CheckBox
                                type="checkbox"
                                checked={task.complete}
                                onChange={() => onTaskToggle(task.id)}
                                />
                                {task.complete && <CheckSpan>Done!</CheckSpan>}
                            </label>

                            <TaskTag
                            className={task.priority === "Urgent" ? "urgent-tag"
                            : task.priority === "Normal" ? "normal-tag"
                            : task.priority === "Low"
                            ? "low-tag" : ""}>
                                {task.priority}
                            </TaskTag>
                        </TaskDetails>
                        
                        <TaskDate>Created <Moment fromNow>{task.date}</Moment></TaskDate>

                        <DeleteButton onClick={() => onTaskDelete(task.id)}>
                            <span role="img" aria-label="emoji">
                                    ✘
                            </span>
                        </DeleteButton>
                    </TaskItem>
                ))}
            </StyledTaskList> 
        }
        
        </>
    )
}

export default TaskList
