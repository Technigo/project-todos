import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"

import taskitems from "reducers/taskitems"
import TaskItemPriority from "./TaskItemPriority"
import StyledButton from "./StyledButton"


const NewTaskContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.5rem 1.5rem 1.5rem;
    padding: 1rem;
    font-family: "Poppins", sans-serif;
    color: #000000ec;
`

const AddTaskTitle = styled.h3`
    font-size: 1rem;
    margin-bottom: 1rem;

    @media screen and (min-width: 1024px) {
        font-size: 1.3rem;
        margin-bottom: 1.5rem;
    }
`

const InputDetails = styled.div`
    display: flex;
    flex-direction: column;
`

const InputTitle = styled.label`
    font-size: 0.9rem;

    @media screen and (min-width: 1024px) {
        font-size: 1.1rem;
    }
`

const TaskInput = styled.input`
    appearance: none;
    border: 2px solid;
    border-color: transparent;
    background: whitesmoke;
    border-radius: 10px;
    padding: 5px;
    margin-top: 6px;
    font-size: 0.9rem;

    &:hover,
    &:active,
    &:focus {
        outline: none;
        border-color: #c56bf9;
    }

    @media screen and (min-width: 1024px) {
        font-size: 1.1rem;
        margin-top: 8px;
        padding: 8px;
    }
`


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
