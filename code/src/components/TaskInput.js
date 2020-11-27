import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Tasks } from '../reducer/Tasks';
import { FormContainer, InputContainer, Input, ButtonInput } from '../styled-components/Input'

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
                    <ButtonInput onClick={onAddItem} type="submit" value="+" disabled={newTask.length < 1}></ButtonInput>
                </InputContainer>
        </FormContainer>
    );
};