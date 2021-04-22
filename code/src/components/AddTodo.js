import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import uniqid from 'uniqid'
import styled from "styled-components";

import { todos } from '../reducers/todos'


export const AddTodo = () => {
    const [inputValue, setInputValue] = useState(''); 
    const dispatch = useDispatch();
 
    const onItemAdd = (event) => {
        event.preventDefault();
        dispatch(
            todos.actions.addTodoItem({
                newTodo: {
                id:uniqid(),          
                text: inputValue,
                isComplete: false
            },
        })
                
    );
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
    width: 300px;

    @media (min-width: 768px) {
        width: 400px;
    }

    @media (min-width: 1024px) {
        width: 500px;
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
    border: none;
    background-color: #F3E2A9;
    &:hover {
            background-color: #D8D8D8;
            cursor: pointer;
    }

        @media (min-width: 768px) {
        width: 480px;
    }

  `
const TextInput = styled.input`
    margin-top: 15px;
    border: none;
    border-bottom: dotted 2px grey;
    margin-bottom: 10px;
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
        width: 480px;
    }

    @media (min-width: 1024px) {
        height: 38px;
        font-size: 18px;
    }
    `;