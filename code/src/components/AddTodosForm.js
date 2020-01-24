import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'
import styled from 'styled-components'

export const AddTodosForm = () => {
    const [task, setTask] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(todos.actions.addTask(task))
        setTask('')
    }

    const FormWrapper = styled.div`
    border-bottom: 2px solid #d1d1e0;
    height: 80px;
    background-color: #F1F9F9;
    padding: 0 5% 0 3%;
    display: flex;
    flex-direction: row;
    align-items: center;
    `;

    const ButtonPlus = styled.button`
    border-radius: 50%;
    border: null;
    font-size: 22px;
    color: #d1d1e0;
    width: 50px;
    height: 50px;
    &:hover {
        color: #5d2242;
        border-color:#5d2242;
        cursor: pointer;
    }
    margin-right:15px;
    `;
    const TaskText = styled.input`
    font-size: 18px;
    height: 30px;
    width:50%;
    border:0;
    background: transparent;
    `;

    return (
        <FormWrapper>
            <form onSubmit={handleSubmit}>
                <ButtonPlus type="submit"> +</ButtonPlus>
                <TaskText type="text"
                    value={task}
                    onChange={(event) => setTask(event.target.value)}
                    placeholder="Add task" />
            </form>
        </FormWrapper>
    )
}



