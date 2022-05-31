import React, { useState } from "react"
import { useDispatch } from "react-redux"

import taskitems from "reducers/taskitems"
import TaskItemPriority from "./TaskItemPriority"
import StyledButton from "../styles/StyledButton"
import {
    NewTaskContainer,
    AddTaskTitle,
    InputDetails,
    InputTitle,
    TaskInput } from "styles/StylesForComponents"


const AddTask = () => {
    const [inputValue, setInputValue] = useState("")
    const [priority, setPriority] = useState("")
    const dispatch = useDispatch()

    const AddTask = () => {
        dispatch(taskitems.actions.addTaskItem({ inputValue, priority }))
        setInputValue("")
    }

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <>
            <NewTaskContainer>
                <AddTaskTitle>Create New Task</AddTaskTitle>

                <InputDetails>
                    <InputTitle htmlFor="task-title">Task Title:</InputTitle>
                    <TaskInput
                    id="task-title"
                    type="text"
                    value={inputValue}
                    onChange={onInputChange} />
                </InputDetails>

                <TaskItemPriority
                    setPriority={setPriority}
                    priority={priority} 
                />

                <StyledButton
                width="100px"
                fontSize="0.8rem"
                fontSizeDesktop="1.1rem"
                widthDesktop="150px"
                borderHover="2px solid black"
                opacityHover="0.8"
                disabled={!inputValue}
                onClick={() => AddTask()}>
                    Add Task
                </StyledButton>
            
            </NewTaskContainer>
        </>
    )
}

export default AddTask
