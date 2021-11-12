import React from "react";
import moment from 'moment';
import styled from 'styled-components';
import { useSelector } from 'react-redux'

const TaskContainer = styled.section`
    color: white;
    box-shadow: -4px 4px 2px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    margin: 5px auto;
    width: 90%;
    display: flex;
    justify-content: space-between;
    background: rgb(0 0 0 / 84%);
`

const TaskLabel = styled.label`
    display: flex;
    align-items: center;
    margin: auto 10px;
`

const TaskDate = styled.label`
    display: flex;
    align-items: center;
    margin: auto 10px;
`

export const Tasks = () => {
    const tasks = useSelector(store => store.todo.tasks)

    return (
        tasks.map(task => {
            return <TaskContainer>
                <TaskLabel>
                    <input type="checkbox"></input>
                    <p>{task.content}</p>
                </TaskLabel>
                <TaskDate>{moment(task.timeStamp).format('lll')}</TaskDate>
            </TaskContainer>
        })
    )
}