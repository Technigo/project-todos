// Style the list item and its content
// Style the checkboxes

import React from "react"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"
import Moment from "react-moment"

import taskitems from "reducers.js/taskitems"
import TaskFilter from "./TaskFilter"

const StyledTaskList = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
`

const TaskItem = styled.article`
    border: 1px solid pink;
    padding: 1.2rem;
    margin: 1rem;
    border-radius: 10px;
    position: relative;
    box-shadow: 0px 1px 2px 0px #b66fdf,
    1px 2px 4px 0px #b66fdf,
    2px 4px 8px 0px #b66fdf,
    2px 4px 16px 0px #b66fdf;
`
const TaskTitle = styled.h3`
    margin-bottom: 2rem;
`

const TaskDetails = styled.div`
    display: flex;
    justify-content: space-between;
`

const TaskTag = styled.span`
    font-size: 0.6rem;
    padding: 6px;
    border-radius: 10px;
    text-align: center;
    width: 60px;
`

const TaskDate = styled.p`
    font-size: 0.8rem;
    margin-top: 0.5rem;
`

const Button = styled.button`
    position: absolute;
    top: 1.1rem;
    right: 1.1rem;
    appearance: none;
    border: none;
    cursor: pointer;
    background: linear-gradient(220deg, #c56bf9 0%, #e3c5f4 80%);
    font-size: 0.8rem;
    color: #000000ec;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    box-shadow: 0px 3px 5px 0px #c56bf9;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 5px 8px 2px #c56bf9d0;
    }
`

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
                                {task.complete && <span>&nbsp; Done!</span>}
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

                        <Button onClick={() => onTaskDelete(task.id)}>
                                <span role="img" aria-label="emoji">
                                    ✘
                                </span>
                        </Button>
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

                            <Button onClick={() => onTaskDelete(task.id)}>
                                Delete
                            </Button>
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
                                <input
                                type="checkbox"
                                checked={task.complete}
                                onChange={() => onTaskToggle(task.id)}
                                />
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

                        <Button onClick={() => onTaskDelete(task.id)}>
                            Delete
                        </Button>
                    </TaskItem>
                ))}
            </StyledTaskList> 
        }
        
        </>
    )
}

export default TaskList
