import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";
import styled from "styled-components";

import tasks from '../reducers/tasks';

const AddTaskContainer = styled.section`
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-family: 'Poppins', sans-serif;
`
const SubmitButton = styled.button`
    border-radius: 50%;
    padding: 0.3rem;
    margin-left: 0.5rem;
    background: #B8E4F0;
    border: none; 
`

const AddTask = () => { 
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTask = {
            id: uniqid(),
            text: input,
            isComplete: false,
        };

        dispatch(tasks.actions.addTask(newTask)); 
        setInput('');
    }
        
    return (
        <AddTaskContainer >
            <form onSubmit={onFormSubmit}>
                <label>
                    New task : &nbsp;
                    <input 
                        className='text-input'
                        type='text'
                        value={input}
                        placeholder='enter new task'
                        onChange={(event) => setInput(event.target.value)}
                    />
                </label>
                <SubmitButton type='submit'>
                    <span className='add'role='img' aria-label='add'>➕</span>
                </SubmitButton>
            </form>
        </AddTaskContainer>
    );
};

export default AddTask; 
