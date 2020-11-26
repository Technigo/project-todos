import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { Tasks } from '../reducer/Tasks';

const FormContainer = styled.article`
    background-color: rgba(255, 255, 255, .7);
    margin: 10px 0px;
    width: 100%;
`;

const Input = styled.input`
    border: none;
    font-family: 'Josefin Slab', serif;        
    border-bottom: 2px solid rgb(36, 90, 92);
    color: rgb(0, 40, 77);
    padding: 10px;
    font-size: 20px;
    &::-webkit-input-placeholder {
        color: rgb(36, 90, 92);
        font-weight: 500;
        font-size: 20px;
    };
`;

const ButtonInput = styled.input`
    background-color: rgba(255, 255, 255, .8);
    margin-left: 20px;
    border: 2px solid rgb(36, 90, 92);
    border-radius: 50%;
    font-size: 20px;
    color: rgb(36, 90, 92);
    padding: 3px 10px;
    cursor: pointer;
`;

export const TaskInput = () => {
    // Helps to dispatch data to the state
    const dispatch = useDispatch();
    
    //This useState will store the value when the user inputs a new task
    const [ newTask, setNewTask ] = useState("");  
    
    //This function will dispatch a new task to the store, specifically to the addTask reducer, and will take the new task that is stored in the newTask useState hook. The input field will be refreshed after the user adds the new task by pressing the button as will change the newTask variable to an empty string
    const onAddItem = () => {
        dispatch(Tasks.actions.addTask(newTask));
        setNewTask("");
    };

    return (
        <FormContainer>
                <Input 
                    type="text"
                    id="task"
                    name="task"
                    value={newTask}
                    onChange={event => setNewTask(event.target.value)}
                    placeholder="Add task"
                />
                <ButtonInput onClick={onAddItem} type="submit" value="+"></ButtonInput>
        </FormContainer>
    );
};