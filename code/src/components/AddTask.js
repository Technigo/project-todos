import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
// import styled from "styled-components";
import uniqid from 'uniqid'

import tasks from "reducers/tasks";

import { Form, GoBackButton } from '../styled-components'

const placeholders = [
    "Water the plants",
    "Take out the bin",
    "Book the laundry room",
    "Buy a bottle of Disaronno",
    "Write that boring essay",
    "Book a dentist appointment",
    "Hang up a painting",
    "Make the bed",
    "Finish the project",
    "Go on a bug hunt"
];



const AddTask = () => {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const goBack = () => {
        navigate("/");
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        
        const newTask = {
            id: uniqid(),
            task: inputValue,
            isDone: false,
        };
        
        dispatch(tasks.actions.addItem(newTask));

        setInputValue('');
        goBack();
    }
    return (
        <Form onSubmit={onFormSubmit}>
            <GoBackButton onClick={goBack}>go back</GoBackButton>
            <label>
                To do : &nbsp;
                <input
                    type='text'
                    value={inputValue}
                    onChange={(e) =>  {
                        setInputValue(e.target.value);
                        }
                    }
                    placeholder={placeholders[[Math.floor(Math.random() * placeholders.length)-1]]}
                />
            </label>
            <button 
                type='submit'    
                disabled={!inputValue}
            >
                submit
            </button>
        </Form>
    )
}

export default AddTask;