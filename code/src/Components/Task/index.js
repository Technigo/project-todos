import React from "react";
import moment from 'moment';
import styled from 'styled-components';
import { useDispatch } from 'react-redux'
import { todo } from "Reducers/todo";

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

const TaskText = styled.p`
 text-decoration: ${props => props.decoration};
`

export const Task = ({ task }) => {
    const dispatch = useDispatch();

    const handleOnChange = (id) => {
        dispatch(todo.actions.completeTask({ taskId: id }));
    }


    const handleOnClickRemove = (id) => {
        dispatch(todo.actions.removeTask({ taskId: id }));
    }

    return (
        <TaskContainer key={task.id}>
            <TaskLabel>
                <input
                    type="checkbox"
                    name={task.id}
                    value={task.id}
                    checked={task.isComplete}
                    onChange={() => handleOnChange(task.id)}
                >
                </input>
                <TaskText decoration={task.isComplete ? "line-through" : "none"}>{task.content}</TaskText>
            </TaskLabel>
            <TaskDate>{moment(task.timeStamp).format('lll')}&nbsp; &nbsp;<i onClick={() => handleOnClickRemove(task.id)} class="fas fa-trash-alt"></i></TaskDate>
        </TaskContainer >
    )
}