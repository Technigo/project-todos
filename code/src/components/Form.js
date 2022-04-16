import React, { useState } from 'react'
import styled from 'styled-components'
import uniqid from 'uniqid';

import { useDispatch } from "react-redux";

import { list } from 'reducers/list';


const StyledForm = styled.form `
label {
    margin-top: 10px;
}

form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}

.input-area {
    display: flex;
    margin-bottom: 20px;
}

input {
    background-color: #FFFF99;
    width: 60%;
    height: 35px;
}

.submit-button {
    margin-left: 10px;
    width: 10%;
    background-color: #FFFF99;
    border: none;
    font-size: 30px;
}
`

//The form
export const Form = () => {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch()

    const onFormSubmit = (event) => {
        event.preventDefault();
        dispatch(list.actions.addTodo(newTodo));
        setInputValue('')
    }
        const newTodo = {
            id: uniqid(),
            title: inputValue,
            isCompleted: false,
        }

    return (
        <StyledForm>
            <form onSubmit={onFormSubmit}>
                <label>New todo:</label>
                <div className='input-area'>
                    <input 
                        type="text"
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)} />
                    <button 
                        className="submit-button" 
                        type='submit'>
                        +
                    </button>
                </div>
            </form>
        </StyledForm>
    )
}