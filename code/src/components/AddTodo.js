import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import styled from "styled-components";

// import DatePicker from 'react-date-picker';

import { todos } from '../reducers/todos'



export const AddTodo = () => {
    const [inputValue, setInputValue] = useState(''); 
    const dispatch = useDispatch();
 
    const onItemAdd = () => {
        dispatch(todos.actions.addTodoItem(inputValue));
        setInputValue('');
    


 };


    return (
            <Form>
                    <TextInput 
                        required
                        type="text"
                        placeholder="Type New Stuff" 
                        onChange={event => setInputValue(event.target.value)}
                        value={inputValue}
                    />
                    <SubmitButton type="submit" onClick={onItemAdd} disabled={!inputValue}>
                        ADD 
                    </SubmitButton>
            </Form>
    )
}

const Form = styled.form`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;

      @media (min-width: 768px) {
        width: 50%
    }

    @media (min-width: 1024px) {
        width: 40%
        font-size: 18px;
    }
`;

const SubmitButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    font-size: 25px;
    &:hover {
            background-color: #A9E2F3;
            cursor: pointer;
    }
  `
const TextInput = styled.input`
    margin-top: 15px;
    border: none;
    border-bottom: dotted 2px grey;
    margin-bottom: 5px;
    height: 40px;
    width: 95%;
    font-size: 16px;
    font-weight: 500;
    &::placeholder {
        font-size: 15px;
        font-weight: lighter;
        color: grey;
    }

    @media (min-width: 768px) {
        height: 38px;
    }

    @media (min-width: 1024px) {
        height: 38px;
        font-size: 18px;
    }
    `;