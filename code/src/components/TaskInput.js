import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { Tasks } from '../reducer/Tasks';

const FormContainer = styled.article`
    background-color: rgba(255, 255, 255, .8);
    margin: 10px;
    width: 100%;
    display: flex; 
    align-items: center;
    justify-content: center;
`;

const InputContainer = styled.div`
    padding: 10px;
`;

const Input = styled.input`
    border: none;
    font-family: 'Open Sans', sans-serif;
    color: rgb(0, 40, 77);
    padding: 20px;
    font-size: 17px;
    background-color: rgb(252, 228, 215);
    &::-webkit-input-placeholder {
        color: rgb(36, 90, 92);
        font-weight: 400;
        font-size: 17px;
    };
`;

const ButtonInput = styled.input`
    background-color: rgba(255, 255, 255);
    margin-left: 20px;
    border: 2px solid rgb(36, 90, 92);
    border-radius: 50%;
    font-size: 20px;
    color: rgb(36, 90, 92);
    padding: 3px 10px;
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
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
                <InputContainer>
                    <Input 
                        type="text"
                        id="task"
                        name="task"
                        value={newTask}
                        onChange={event => setNewTask(event.target.value)}
                        placeholder="Add task"
                    />
                    <ButtonInput onClick={onAddItem} type="submit" value="+"></ButtonInput>
                </InputContainer>
        </FormContainer>
    );
};