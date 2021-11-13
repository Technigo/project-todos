import React, { useState } from "react";
import styled from 'styled-components';
import { todo } from "Reducers/todo";
import { useDispatch } from 'react-redux'

const AddTaskContainer = styled.section`
    color: #000000;
    background: rgb(0 0 0 / 95%);
    box-shadow: -4px 4px 2px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    margin: 20px auto;
    min-height: 100px;
    height: auto;
    width: 90%;
    display: flex;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

    @media (min-width: 768px){
        width: 70%;
    }
    @media (min-width: 992px) {
        width: 50%;
    }
`

const CreateTaskButton = styled.button`
    color: white;
    background: black;
    border-radius: 12px;
    margin: 0 auto;
    height: 40px;
    border: 1px solid white;
    width: 100%;
    height: 100px;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 700;
`

const AddTaskLabel = styled.label`
    color: white;
    display: flex;
    align-items: center;
    margin: 0 auto;
    flex-direction: column;
    height: 80%;
    width: 90%;
`

const AddTaskInput = styled.textarea`
    color: white;
    border: 1px solid white;
    min-height: 90px;
    max-height: 360px;
    height: auto;
    width: 100%;
    font-size: 16px;
    resize: none;
    background: rgb(0 0 0 / 5%);
    border: 1px solid white;
    margin: 1rem 0 0 0;
    font-family: 'Roboto', sans-serif;
    
       &:focus {
        outline: none !important;
    }
`

const AddTaskButton = styled.button`
    color: white;
    border: 1px solid white;
    font-weight: 700;
    background: rgb(0 0 0 / 5%);
    font-size: 1rem;
    padding: 0.3rem 2rem;
    border-radius: 10px;
    margin: 1rem auto;

       &:focus {
        outline: none !important;
    }
`

const AddTaskSymbol = styled.span`
    color: white;
    font-weight: 700;
    font-size: 1.2rem;
`


const MaxLength = styled.span`
    color: red;
    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5), 0px 5px 4px rgba(255,255,255,0.41);
    font-weight: 400;
    font-size: 0.7rem;
    padding: 5px 0 1rem 0;
`

export const AddTask = () => {
    const dispatch = useDispatch();
    const [canWrite, setCanWrite] = useState(false);
    const [maxLength, setMaxLength] = useState("")
    const [task, setTask] = useState("");

    const maxLengthPermitted = 450;
    const handleCreateTask = () => {
        setCanWrite(true);
    }

    const handleAddTask = () => {
        setCanWrite(false);
        setTask("");
        if (task && task.length < maxLengthPermitted) {
            dispatch(todo.actions.addTask(task));
            setTask("");
        }
    }

    const handleOnChange = (e) => {
        setTask(e.target.value)
        if (e.target.value.length > maxLengthPermitted) {
            setMaxLength(`Max ${maxLengthPermitted} characters`)
        } else {
            setMaxLength("")
        }

    }

    return (
        <AddTaskContainer>
            {!canWrite && <CreateTaskButton onClick={() => handleCreateTask()}><AddTaskSymbol>+</AddTaskSymbol>&nbsp; Add a task</CreateTaskButton>}
            {canWrite && <AddTaskLabel>
                <AddTaskInput maxlength={maxLengthPermitted} placeholder="Write your task" onChange={(e) => handleOnChange(e)} >
                </AddTaskInput>
                <MaxLength>{maxLength}</MaxLength>
                <AddTaskButton onClick={() => handleAddTask()}>Done</AddTaskButton>
            </AddTaskLabel>}
        </AddTaskContainer>
    )
}