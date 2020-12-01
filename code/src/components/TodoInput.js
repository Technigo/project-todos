import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { todos } from '../reducers/todos.js';

const FormContainer = styled.form`
  padding: 20px;
  text-align: center;
`;

const FormInput = styled.input`
  padding: 10px 0px 5px 3px;
  font-size: 16px;
`;

const AddButton = styled.input`
background: #000000;
color: #ffffff;
font-size: 16px;
padding: 10px;
margin-left: 20px;
border: none;
border-radius: 5px;
cursor: pointer;
`;

export const TodoInput = () => {
    const dispatch = useDispatch();

    //State for text from input field
    const [inputText, setInputText] = useState('');

    //Submit function to dispatch addTodo
    const handleSubmit = (event) => {
        event.preventDefault();
        
        //Dispatch action to save new todo 
        dispatch(
            todos.actions.addTodo({
                text: inputText,
                isComplete: false
            })
        );
        
        //Clears the input field
        setInputText('')
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            <FormInput
                type='text'
                placeholder='Add todo here...'
                onChange={event => setInputText(event.target.value)}
                value={inputText}
            /> 
            <AddButton
                type='submit'
                value='Add Todo'
            />
        </FormContainer>
    );
};