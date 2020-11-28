import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'

import { todos } from '../reducers/todos';
import { InputContainer } from 'lib/InputContainer';
import { Button } from 'lib/Button';

const TextInput = styled.input`
width: 250px;
font-size: 16px;
margin-right: 5px;
border: 1px solid #888;
border-radius: 5px;
padding: 4px;
`

    // Receives Id as input
export const AddTodo = () => {
      // State for input from text box
    const [value, setValue] = useState("");
    const dispatch = useDispatch();


 const onTodoAdd = (event) => {
    event.preventDefault()

        dispatch(todos.actions.addItem(value));
    
    // Clear the text fields after save
    setValue("")
  }


    return (
        <InputContainer>
            <TextInput
                type="text" 
                placeholder="This needs to get done....."
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <Button type="submit" onClick={onTodoAdd}>Add todo</Button>
        </InputContainer>
    );
};



