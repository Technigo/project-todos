import React from "react";
import moment from 'moment';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux'
import { todo } from "Reducers/todo";

const TaskContainer = styled.div`
    color: white;
    box-shadow: -4px 4px 2px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    margin: 5px auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: rgb(0 0 0 / 84%);
  
`

const TaskLabel = styled.label`
    display: flex;
    align-items: center;
    margin: auto 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 0.8rem;
    @media (min-width: 768px){
        font-size: 0.9rem;
    }
    @media (min-width: 992px) {
        font-size: 1.1rem;
    }
`

const TaskDate = styled.label`
    display: flex;
    align-items: center;
    margin: auto 10px;
    font-size: 0.8rem;
    @media (min-width: 768px){
        font-size: 0.9rem;
    }
`

const TaskText = styled.p`
    text-decoration: ${props => props.decoration};
    text-align: justify;
    font-size: 0.8rem;
    @media (min-width: 768px){
        font-size: 0.9rem;
    }
`

const TaskInput = styled.input`
    font-family: 'Roboto', sans-serif;
    width: 1em;
    height: 1em;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #ddd;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
      &:checked{
        background-color: gray;
      }
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
        <TaskContainer>
            <TaskLabel>
                <TaskInput
                    type="checkbox"
                    name={task.id}
                    value={task.id}
                    checked={task.isComplete}
                    onChange={() => handleOnChange(task.id)}
                >
                </TaskInput>
                <TaskText decoration={task.isComplete ? "line-through" : "none"}>{task.content}</TaskText>
            </TaskLabel>
            <TaskDate>{moment(task.timeStamp).format('lll')}&nbsp; &nbsp;<i onClick={() => handleOnClickRemove(task.id)} className="fas fa-trash-alt"></i></TaskDate>
        </TaskContainer >
    )
}
