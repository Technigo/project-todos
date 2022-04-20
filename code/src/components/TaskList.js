import React from "react"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"
import Moment from "react-moment"

import taskitems from "reducers/taskitems"
import TaskFilter from "./TaskFilter"

const StyledTaskList = styled.section`
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
    font-family: "Poppins", sans-serif;
`

const TaskItem = styled.article`
    border: 1px solid pink;
    padding: 1.5rem;
    margin: 1rem;
    border-radius: 10px;
    position: relative;
    overflow-wrap: break-word;
    box-shadow: 0px 1px 2px 0px #b66fdf,
    1px 2px 4px 0px #b66fdf,
    2px 4px 8px 0px #b66fdf,
    2px 4px 16px 0px #b66fdf;

    @media screen and (min-width: 1024px) {
        padding: 2rem;
    }
`
const TaskTitle = styled.h3`
    margin-bottom: 2.3rem;
    font-size: 1.2rem;
    color: #00000ec;
    width: 85%;

    @media screen and (min-width: 1024px) {
        margin-bottom: 3rem;
        font-size: 1.4rem;
        width: 90%;
    }
`

const TaskDetails = styled.div`
    display: flex;
    justify-content: space-between;
`

const TaskTag = styled.span`
    font-size: 0.8rem;
    padding: 4px;
    border-radius: 10px;
    text-align: center;
    width: 60px;
    color: #000000ec;

    @media screen and (min-width: 1024px) {
        font-size: 1rem;
        width: 80px;
    }
`

const CheckBox = styled.input`
    width: 200px;
`

const CheckSpan = styled.span`
    margin-left: 1rem;
    background: white;
    border-radius: 10px;
    padding: 5px;
    color: black;
    font-size: 0.9rem;
    text-align: center;

    @media screen and (min-width: 1024px) {
        font-size: 1rem;
    }
`

const TaskDate = styled.p`
    font-size: 0.8rem;
    margin-top: 1rem;

    @media screen and (min-width: 1024px) {
        font-size: 1rem;
    }
`

const DeleteButton = styled.button`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
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
        transition: 0.4s ease-in-out;
    }

    @media screen and (min-width: 1024px) {
        top: 2rem;
        right: 2rem;
        width: 35px;
        height: 35px;
        font-size: 1rem;
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
