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
    height: 100px;
    width: 90%;
    display: flex;
    align-items: center;
`

const CreateTaskButton = styled.button`
    color: white;
    background: blue;
    border-radius: 20px;
    margin: 0 auto;
    height: 40px;
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
    min-height: 50px;
    height: auto;
    width: 90%;
    resize: none;
    font-size: 16px;
    resize: both;
    background: rgb(0 0 0 / 5%);
    border: none;
       &:focus {
        outline: none !important;
    }
`

const AddTaskButton = styled.button`
    color: white;
    background: rgb(0 0 0 / 5%);
    border: none;
       &:focus {
        outline: none !important;
    }
`
export const AddTask = () => {
    const dispatch = useDispatch();
    const [canWrite, setCanWrite] = useState(false);
    const [task, setTask] = useState("");

    const handleCreateTask = () => {
        setCanWrite(true);
    }

    const handleAddTask = () => {
        if (task) {
            dispatch(todo.actions.addTask(task));
            setTask("");
            setCanWrite(false);
        }

    }

    return (
        <AddTaskContainer>
            {!canWrite && <CreateTaskButton onClick={() => handleCreateTask()}>+ Add a task</CreateTaskButton>}
            {canWrite && <AddTaskLabel>
                <AddTaskInput rows="1" cols="1" placeholder="Write your task" onChange={event => setTask(event.target.value)} >
                </AddTaskInput>
                <AddTaskButton onClick={() => handleAddTask()}>Add your task</AddTaskButton>
            </AddTaskLabel>}
        </AddTaskContainer>
    )
}