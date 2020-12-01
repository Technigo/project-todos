import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { todos } from '../reducers/todos';
import { InputContainer,InputNrOfTask, Input, InputButton, InputHeading, SetInputContainer } from '../styled-components/AddTodo';

const AddTodo = () => {
    const [value, setValue]= useState ('');
    const dispatch = useDispatch();
    const items = useSelector(store => store.todos.items);

    const OnItemAdd = () =>{
        dispatch(todos.actions.addItem(value))
    }
    
    return (
        <InputContainer>
        <InputHeading> Todo list </InputHeading>
        <InputNrOfTask>You have added {items.length}{' '}{items.length ===1 ? 'task' : 'tasks' }</InputNrOfTask>
            <Input
                id="task"
                type= "text" 
                value={value} 
                onChange={e =>setValue(e.target.value)}
                placeholder="Add todo" 
            />
        <InputButton onClick={OnItemAdd} type="submit" disabled={value.length < 1}> + </InputButton>
        </InputContainer>
    )
}

export default AddTodo;