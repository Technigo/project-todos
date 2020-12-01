import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import { todos } from '../reducers/todos';
import { InputContainer, Input, InputButton, InputHeading } from '../styled-components/AddTodo';

const AddTodo = () => {
    const [value, setValue]= useState ('');
    const dispatch = useDispatch();

    const OnItemAdd = () =>{
        dispatch(todos.actions.addItem(value))
    }


    return (
        <InputContainer>
        <InputHeading> Todo list </InputHeading>
            <Input
                type= "text" 
                value={value} 
                onChange={e =>setValue(e.target.value)}
                placeholder="Add todo" 
            />
            <InputButton onClick={OnItemAdd} type="submit" disabled={value.length < 1}>+ </InputButton>
        </InputContainer>
    )
}

export default AddTodo;